import Comment from '../../components/Comment/Comment'
import {getAllComments} from '../../utilities/comments-api'
import {useState,useEffect} from 'react'

export default function CommentList(
    {postId}
){
    const[comments, setComments] = useState([])
    useEffect(function(){
        async function fetchComments(){
            try{
                const data = await getAllComments()
                const filteredComments = data.filter(comment => comment.post === postId);
                setComments(filteredComments)
            }catch(error){
                console.log(error)
            }
        }
        fetchComments()
    },[])

    return(
        <>
        {
            comments.length>0 && (comments.map(comment=>(
                <Comment 
                key={comment._id}
                comment={comment}/>
            )))
        }
        </>
    )
}