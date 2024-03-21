import styles from './Comment.module.scss'
import {likeComment} from '../../utilities/comments-api'
import {Heart} from 'lucide-react'


export default function Comment(
    {comment}
){


    async function handleLikeComment(CommentId) {
        
        try {
            await likeComment(CommentId);
            console.log('Comment successfully liked');
           
        } catch (error) {
            console.error('Error liking comment:', error);
        }
    }
    return(
        <>
        {/* need to populate the comments in the commentList Component */}
            <h3>{comment.user.name}</h3>
            <h3>{comment.body}</h3>
            <Heart onClick={()=>{handleLikeComment(comment._id)}}/>
        </>
    )
}