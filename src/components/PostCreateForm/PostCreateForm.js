import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {createPost} from '../../utilities/posts-api'
//import star rating package npm i react-simple-star-rating
import { Rating } from 'react-simple-star-rating'
import {storage} from '../../firebase'
import {ref, uploadBytes,getDownloadURL,uploadBytesResumable} from 'firebase/storage'
import {v4} from 'uuid'
import styles from './PostCreateForm.module.scss'

// Need to change the the rating in post model to be Number instead of Boolean 
export default function PostCreateForm({user}){
    const [post, setNewPost] = useState({
        title:'',
        body: '', 
        pic: '', 
        dish: '', 
        rating: 0
    })

     function handleChange(e){
        setNewPost({...post, [e.target.name]: e.target.value})
     }
     
     const navigateTo = useNavigate() 
     //handle the rating star
     const [rating, setRating] = useState(0)
      // Catch Rating value
      const handleRating = (rate) => {
        setRating(rate)
        setNewPost({...post, rating:rate})
      }

      // after submitting the new post, go to the Homepage
     async function handleSubmit(evt) {
        evt.preventDefault();
        try {
          const newPost= await createPost(post);
          // return newPost;
          navigateTo('/home')
          console.log(newPost)

        } catch(error) {
          console.error('Can not create a post');
        }
      }

      const handleImageUpload =  (e) => {

          const imageFile = e.target.files[0];
          const imageRef = ref(storage, `images/${imageFile.name + v4()}`);

          const uploadTask = uploadBytesResumable(imageRef, imageFile);

          uploadTask.on('state_changed', 
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            console.error('Error getting uploding pic:', error);
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              setNewPost({ ...post, pic: downloadURL})
            });
          }
        );

          }

    return(

        <div className={styles.postCreateFormContainer}>
         <form onSubmit={handleSubmit} className={styles.postCreateForm}>
         <h1>Create a Post!</h1>
          <div className={styles.textInputContainer}>
            <input type='text' placeholder='title' value={post.title} name='title' onChange={handleChange} className={styles.inputBox}/>
            <input type='text' placeholder='body' value={post.body} name='body' onChange={handleChange} className={styles.inputBox}/>
          </div>
          <div className={styles.imageInputContainer}>
                    <input type="file" placeholder="Pic" onChange={handleImageUpload} className={styles.fileUpload} />
          </div>
          <div className={styles.dishRatingInputContainer}>
            <input type='text' placeholder='dish Name' value={post.dish} name='dish' onChange={handleChange} className={styles.inputBox}/>
            <Rating
                onClick={handleRating}
                value={post.rating}
            />
            </div>
            <div className={styles.submitContainer}>
              <input type="submit" />
            </div>
         </form>
        </div>
    )
}