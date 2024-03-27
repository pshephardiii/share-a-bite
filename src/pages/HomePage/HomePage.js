import {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PostList from '../../components/PostList/PostList'

import * as postAPI from '../../utilities/posts-api'
import * as commentAPI from '../../utilities/comments-api'
import styles from './homepage.module.scss'

export default function HomePage(
    {user, setUser}
){
    const [allPosts, setAllPosts] = useState(null)
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)
    const [comment, setComment] = useState(null)
    useEffect(function(){
        async function fetchAllPosts(){
           try{
            const data = await postAPI.getAllPosts()
            console.log(data)
            setAllPosts(data)
           } catch(error){
            console.log(error)
           }
        }
        fetchAllPosts()
    },[])

     async function handleLikePost(postId) {
        const data = await postAPI.likePost(postId)
        setPost(data)
     }

     async function handleUnlikePost(postId) {
        const data = await postAPI.unlikePost(postId)
        setPost(data)
     }

     async function handleAllComments() {
        const data = await commentAPI.getAllComments()
        setComments(data)
     }

     async function handleLikeComment(commentId) {
        const data = await commentAPI.likeComment(commentId)
        setComment(data)
     }

     async function handleCreateComment() {
        const data = await commentAPI.createComment()
        setComment(data)
     }


    console.log(allPosts)
    return(
        <> 
        <div className={styles.HomePage}>
        <div className={styles.logoContainer}>
            <img className={styles.logo} src="https://i.imgur.com/TxFQTR4.png"/>
                    <div className={styles.companyName}>
                        <h1>Share-A-Bite</h1>
                    </div>
        
         </div>
            {
                allPosts && 
                <PostList 
                allPosts={allPosts} 
                handleLikePost={handleLikePost} 
                handleUnlikePost={handleUnlikePost} 
                handleAllComments={handleAllComments}
                handleLikeComment={handleLikeComment} 
                handleCreateComment={handleCreateComment}/>
            }
            </div>
            <NavBar user={user} setUser={setUser}/>
            
        </>
    )
}