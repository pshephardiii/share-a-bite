import CommentList from '../CommentList/CommentList'
import CreateCommentForm from '../CreateCommentForm/CreateCommentForm'
import * as postAPI from '../../utilities/posts-api'
import {Heart} from 'lucide-react'
import { Rating } from 'react-simple-star-rating'
import {useState, useEffect} from 'react'
// import {getDownloadURL} from 'firebase/storage'

export default function Post(
    {post}
){

    //setup the url for the image to show it
    const [image, setImage] = useState('')
    // useEffect(()=>{getDownloadURL(post.pic).then((url)=>{
    //     setImage(url)
    // })},[])

    async function handleLikePost(postId) {
        
        try {
            await postAPI.likePost(postId);
            console.log('Post successfully liked');
           
        } catch (error) {
            console.error('Error liking post:', error);
        }
    }

    async function handleUnlikePost(postId) {
        
        try {
            await postAPI.unlikePost(postId);
            console.log('Post successfully unliked');
           
        } catch (error) {
            console.error('Error liking post:', error);
        }
    }
    return(
        <>
            <h3>{post.user}</h3>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
            {/* <img src={image}/> */}
            <h3>{post.dish}</h3>
            <h3>{post.likes}</h3>
            {/* <h3>{post.rating}</h3> */}
            <Rating
                value={post.rating}
            />
            {/* <button onClick={()=>{handleLikePost(post._id)}}>like</button>
            <button onClick={()=>{handleUnlikePost(post._id)}}>unlike</button> */}

            <button onClick={()=>{handleLikePost(post._id)}}>like</button>
            <button onClick={()=>{handleUnlikePost(post._id)}}>unlike</button>

            <CommentList postId={post._id}/>
            <CreateCommentForm postId={post._id}/>

        </>
    )
}