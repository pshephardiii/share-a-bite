import CommentList from '../CommentList/CommentList'
import CreateCommentForm from '../CreateCommentForm/CreateCommentForm'
import * as postAPI from '../../utilities/posts-api'
import {getAllComments} from '../../utilities/comments-api'
import { createComment } from '../../utilities/comments-api';
import {Heart} from 'lucide-react'

// import { FaHeart } from "react-icons/fa"; /* used lucide & fill: red */

import { Rating } from 'react-simple-star-rating'
import { Cookie } from 'lucide-react'
import {useState, useEffect} from 'react'
import styles from './Post.module.scss'

export default function Post({post}) {
    const [liked, setLiked] = useState(false);

    const[comments, setComments] = useState([])
    const [comment, setComment] = useState({ body: '' });
   

    useEffect(function(){
        async function fetchComments(){
            try{
                const data = await getAllComments()
                const filteredComments = data.filter(comment => comment.post === post._id);
                setComments(filteredComments)
            }catch(error){
                console.log(error)
            }
        }
        fetchComments()
    },[comment])



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
            console.error('Error unliking post:', error);
        }
    }

    return (

        post ?
        
        <div className={styles.post}>
            <h3 className={styles.userName}>{post.user.name}</h3>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.body}>{post.body}</p>
            <img src={post.pic}/>
            <div className={styles.ratingContainer}>
                <h2 className={styles.dish}>{post.dish}</h2>
                <Rating
                    initialValue={post.rating}
                    readonly={true}
                />
            </div>
            {
                liked ?
                <div onClick={() => {handleUnlikePost(post._id); setLiked(!liked)}}>
                    <Heart style={{color: 'red', fill: 'red', fontSize: '30px'}} />
                </div> :
                <div onClick={() => {handleLikePost(post._id); setLiked(!liked)}}>
                    <Heart color='gray' fontSize='30px'/>
                </div>
            }
            <div className={styles.likeContainer}>
                <p className={styles.likes}>{post.likes}</p>

            {/* <button onClick={()=>{handleLikePost(post._id)}}>like</button>
            <button onClick={()=>{handleUnlikePost(post._id)}}>unlike</button> */}

{
                liked?  <div  onClick={()=>{handleUnlikePost(post._id),setLiked(!liked)}} ><Heart color='red' fill='red' fontSize='30px'/></div>:
                <div  onClick={()=>{handleLikePost(post._id),setLiked(!liked)}} ><Heart color='gray' fontSize='30px'/></div>
              }

            <CommentList comments={comments}/>
            <CreateCommentForm postId={post._id} setComment={setComment} comment={comment}/>
            </div>
        </div> :
        <></>
    )
}
