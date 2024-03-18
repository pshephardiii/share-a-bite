import CommentList from '../CommentList/CommentList'
import {Heart} from 'lucide-react'
import { Rating } from 'react-simple-star-rating'
import { createComment } from '../../utilities/comments-api'

export default function Post(
    {post,handleLikePost,handleUnlikePost }
){
    const[comment, setComment] =useState(
        {body: ''}
    )

    return(
        <>
            <h3>{post.user}</h3>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
            <h3>{post.pic}</h3>
            <h3>{post.dish}</h3>
            {/* <h3>{post.rating}</h3> */}
            <Rating
                value={post.rating}
            />
            <button onClick={()=>{handleLikePost(post._id)}}/><button/>
            <button onClick={()=>{handleUnlikePost(post._id)}}/><button/>

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