import {likeComment} from '../../utilities/comments-api'
import {Heart} from 'lucide-react'

export default function Post(
    {post}
){

    return(
        <>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
            <h3>{post.pic}</h3>
            <h3>{post.dish}</h3>
            <h3>{post.rating}</h3>
            <Heart onClick={()=>{likeComment(comment._id)}}/>
        </>
    )
}