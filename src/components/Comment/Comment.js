import styles from './Comment.module.scss'
import React, { useState } from 'react'
import {likeComment} from '../../utilities/comments-api'
import {Heart, ThumbsDown,ThumbsUp} from 'lucide-react'


export default function Comment(
    {comment}
){
   
        const[liked, setLiked] = useState(false);
        const handleClick = () => {
          setLiked(!liked);
        };
           
        

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
            {/* <Heart color='red' onClick={()=>{handleLikeComment(comment._id)}}/> */}
           { liked? <ThumbsUp
            color="red" 
            size="50" 
            onClick={() => {handleClick;handleLikeComment(comment._id)}}/>:
             <Heart
          color="black" 
          size="50" 
          onClick={() => {handleClick;handleLikeComment(comment._id)}}/> }  

            {/* {
                liked?(< button className={styles.likedButton} style={{ color: "#fff" }} onClick={() => {handleClick;handleLikeComment(comment._id)}}>
                <ThumbsUp />Like</button>):
                (<button style={{ color: "#fff" }} onClick={() => {handleClick;handleLikeComment(comment._id)}}>
                <Heart /></button>)

            } */}
              

                
            
    

            {/* { liked? <heart
            color="blue" 
            size="50" 
            onClick={() => {handleClick;handleLikeComment(comment._id)}}/>:
             <heart
          color="red" 
          size="50" 
          onClick={() => {handleClick;handleLikeComment(comment._id)}}/> }  
          
             */}
       
            
        </>
    )
}