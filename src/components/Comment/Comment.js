import styles from './Comment.module.scss'
import {likeComment} from '../../utilities/comments-api'
import {Heart} from 'lucide-react'


export function Comment(
    {comment}
){

    return(
        <>
        {/* need to populate the comments in the commentList Component */}
            <h3>{comment.user.name}</h3>
            <h3>{comment.body}</h3>
            <Heart onClick={()=>{likeComment(comment._id)}}/>
        </>
    )
}