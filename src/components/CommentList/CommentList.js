import Comment from '../../components/Comment/Comment'
import {getAllComments} from '../../utilities/comments-api'
import {useState,useEffect} from 'react'

export default function CommentList(
){
    const[comments, setComments] = useState([])
    useEffect(function(){
        async function fetchComments(){
            try{
                const data = await getAllComments()
                setComments(data)
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