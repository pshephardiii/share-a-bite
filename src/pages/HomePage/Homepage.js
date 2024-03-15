import {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar'
import CommentForm from '../../components/CommentForm/CommentForm'
import PostList from '../../components/PostList/PostList'
import LogOut from '../../components/LogOut/LogOut'
import * as postAPI from '../../utilities/posts-api'

export function HomePage(
    {user, setUser}
){
    const [allPosts, setAllPosts] = useState([])
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

    console.log(allPosts)
    return(
        <>
            <NavBar/>
            <LogOut user={user} setUser={setUser}/>
            <CommentForm user={user}/>
            {
                allPosts.length>0?<PostList allPosts={allPosts}/>:<></>  
            }
            
        </>
    )
}