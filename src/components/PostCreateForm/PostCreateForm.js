import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {createPost} from '../../utilities/posts-api'
//import star rating package npm i react-simple-star-rating
import { Rating } from 'react-simple-star-rating'
import {storage} from '../../firebase'
import {ref, uploadBytes} from 'firebase/storage'
import {v4} from 'uuid'

// Need to change the the rating in post model to be Number instead of Boolean 
export default function PostCreateForm(){
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
          navigateTo(`/home`)

        } catch {
          setError('Can not create a post');
        }
      }
      const[imageUpload, setImageUpload] = useState(null)
      const uploadImage=() => {
        if (imageUpload = null) return;
        //define the path to store the image and give the path a unique name
        const imageRef = ref(storage, `images/${imageUpload.name +v4() }`)
      
        uploadBytes(imageRef, imageUpload).then(()=>{
          console.log('image successfully uploaded')
            // update the post object 
          setNewPost({...post, pic:imageRef})
        })

      }

    return(
        <>
         <form onSubmit={handleSubmit}>
            <input type='text' placeholder='title' value={post.title} name='title' onChange={handleChange}/>
            <input type='text' placeholder='body' value={post.body} name='body' onChange={handleChange}/>
            {/* <input type='text' placeholder='pic' value={post.pic} name='pic' onChange={handleChange}/> */}
            <input type='file' placeholder='pic' onChange={(e)=>{setImageUpload(e.target.files[0])}}/>
            <button onClick={uploadImage}>Upload Image</button>
            <input type='text' placeholder='dish Name' value={post.dish} name='dish' onChange={handleChange}/>
            {/* <input type='number' placeholder='number' value={post.rating} name='rating' onChange={handleChange}/> */}
            <Rating
                onClick={handleRating}
                value={post.rating}
            />
         </form>
        </>
    )
}