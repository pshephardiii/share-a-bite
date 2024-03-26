import CommentList from '../CommentList/CommentList'
import CreateCommentForm from '../CreateCommentForm/CreateCommentForm'
import * as postAPI from '../../utilities/posts-api'
import {getAllComments} from '../../utilities/comments-api'
import { Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import {useState, useEffect} from 'react'
import styles from './Post.module.scss'

export default function Post({post}) {
    const [liked, setLiked] = useState(false);

    const [restaurant, setRestaurant] = useState([])

    const[comments, setComments] = useState([])
    const [comment, setComment] = useState({ body: '' });
    const [updatedPost, setUpdatedPost] = useState(post)
    const navigate = useNavigate()
   
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

    useEffect(function(){
        async function fetchPost(){
            try{
                const data = await postAPI.getIndividualPost(post._id)
                setUpdatedPost(data)     
            }catch(error){
                console.log(error)
            }
        }
        fetchPost()
    },[liked])

    async function handleLikePost(postId) {
        try {
            await postAPI.likePost(postId);
            setLiked(!liked)
            console.log('Post successfully liked');
        } catch (error) {
            console.error('Error liking post:', error);
        }
    }

    async function handleUnlikePost(postId) {
        try {
            await postAPI.unlikePost(postId);
            setLiked(!liked)
            console.log('Post successfully unliked');
        } catch (error) {
            console.error('Error unliking post:', error);
        }
    }

    return (
        post ?
        <div className={styles.post}>
                <div className={styles.userContainer}>
                    <h3 onClick = {()=>navigate(`/usershowpage/${post.user._id}`)} className={styles.userName}>
                        <img src='https://picsum.photos/100' className={styles.profilePic} alt={post.user.name}/>
                        {post.user.name}
                    </h3>
                </div>
                
                <div className={styles.ratingContainer}>
                    <h4 className={styles.dish}>{post.dish}</h4>
                    <Rating
                        initialValue={post.rating}
                        readonly={true}
                        size={20}
                    />
                </div>

                <h3 className={styles.restaurant}>{restaurant.name}</h3>
                
                <img src={post.pic} className={styles.postPic} alt={post.dish}/>

                <div className={styles.likeContainer}>
                    {
                        liked ?
                        <div onClick={() => {handleUnlikePost(post._id)}}>
                            <Heart style={{color: 'red', fill: 'red', fontSize: '30px'}} />
                        </div> :
                        <div onClick={() => {handleLikePost(post._id)}}>
                            <Heart color='gray' fontSize='30px'/>
                        </div>
                    }
                
                    <span>{updatedPost.likes} {updatedPost.likes === 1 ? 'like' : 'likes'}</span>
                </div>  

            <div className={styles.postBody}>
                    <h3>{post.user.name}</h3> 
                    <b>{post.title}</b> &nbsp;
                    {post.body}
            </div>

            <div className={styles.commentsContainer}>
                <CommentList comments={comments}/>
                <CreateCommentForm postId={post._id} setComment={setComment} comment={comment}/>
            </div>

        </div>
         :
        <></>
    )
}
