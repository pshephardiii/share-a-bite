import {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PostCreateForm from '../../components/PostCreateForm/PostCreateForm'
import PostList from '../../components/PostList/PostList'

import * as postAPI from '../../utilities/posts-api'
import * as commentAPI from '../../utilities/comments-api'

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
            <h1>Share a Bite</h1>
         
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
            <NavBar user={user} setUser={setUser}/>
            
        </>
    )
}