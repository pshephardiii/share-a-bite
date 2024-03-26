import Comment from '../Comment/Comment'
// import {getAllComments} from '../../utilities/comments-api'
import {useState,useEffect} from 'react'

export default function CommentList(
    {comments}
){
    // const[comments, setComments] = useState([])
    // useEffect(function(){
    //     async function fetchComments(){
    //         try{
    //             const data = await getAllComments()
    //             const filteredComments = data.filter(comment => comment.post === postId);
    //             setComments(filteredComments)
    //         }catch(error){
    //             console.log(error)
    //         }
    //     }
    //     fetchComments()
    // },[])

    return(
        <div className={StyleSheet.commentList}>
        {
            comments.length>0 && (comments.map(comment=>(
                <Comment 
                key={comment._id}
                comment={comment}/>
            )))
        }
        </div>
    )
}