import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {createPost} from '../../utilities/posts-api'
//import star rating package npm i react-simple-star-rating
import { Rating } from 'react-simple-star-rating'
import {storage} from '../../firebase'
import {ref, uploadBytes} from 'firebase/storage'
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

      // const[imageUpload, setImageUpload] = useState(null)
      // const uploadImage=() => {
      //   if (imageUpload == null) return;
      //   //define the path to store the image and give the path a unique name
      //   const imageRef = ref(storage, `images/${imageUpload.name +v4()}`)
      
      //   uploadBytes(imageRef, imageUpload).then(()=>{
      //     console.log('image successfully uploaded')
      //       // update the post object 
      //     setNewPost({...post, pic:imageRef})
      //   })}


     

    return(

        <div className={styles.postCreateFormContainer}>
         <form onSubmit={handleSubmit} className={styles.postCreateForm}>
         <h1>Create a Post!</h1>
          <div className={styles.textInputContainer}>
            <input type='text' placeholder='title' value={post.title} name='title' onChange={handleChange} className={styles.inputBox}/>
            <input type='text' placeholder='body' value={post.body} name='body' onChange={handleChange} className={styles.inputBox}/>
            {/* <input type='text' placeholder='pic' value={post.pic} name='pic' onChange={handleChange} className={styles.inputBox}/>  */}
          </div>
          <div className={styles.imageInputContainer}>
            {/*<input type='file' placeholder='pic' onChange={(e)=>{setImageUpload(e.target.files[0])}} className={styles.fileUpload}/>*/}
            <input type='file' placeholder='pic' className={styles.fileUpload}></input>
           {/* <button onClick={uploadImage}>Upload Image</button> */}
           <button className={styles.button}>Upload image</button>
          </div>
          <div className={styles.dishRatingInputContainer}>
            <input type='text' placeholder='dish Name' value={post.dish} name='dish' onChange={handleChange} className={styles.inputBox}/>

            {/* <input type='number' placeholder='number' value={post.rating} name='rating' onChange={handleChange}/> */}
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