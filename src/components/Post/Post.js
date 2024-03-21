import CommentList from '../CommentList/CommentList'
import {Heart} from 'lucide-react'
import { Rating } from 'react-simple-star-rating'
import { createComment } from '../../utilities/comments-api'
import {useState, useEffect} from 'react'
// import {getDownloadURL} from 'firebase/storage'

export default function Post(
    {post,handleLikePost,handleUnlikePost }
){
    const[comment, setComment] =useState(
        {body: ''}
    )

    //setup the url for the image to show it
    const [image, setImage] = useState('')
    // useEffect(()=>{getDownloadURL(post.pic).then((url)=>{
    //     setImage(url)
    // })},[])
    return(
        <>
            <h3>{post.user}</h3>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
            {/* <img src={image}/> */}
            <h3>{post.dish}</h3>
            {/* <h3>{post.rating}</h3> */}
            <Rating
                value={post.rating}
            />
            <button onClick={()=>{handleLikePost(post._id)}}>like</button>
            <button onClick={()=>{handleUnlikePost(post._id)}}>unlike</button>

            <CommentList postId={post._id}/>
          
            <form onSubmit={(e) => {
                e.preventDefault()
                createComment(post._id,comment)
            }}>
                <input type='text' placeholder='comment' value={Comment.body} onChange={(e)=>{setComment(e.target.value)}} />
            </form>

        </>
    )
}