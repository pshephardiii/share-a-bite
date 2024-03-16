import {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PostCreateForm from '../../components/PostCreateForm/PostCreateForm'
import PostList from '../../components/PostList/PostList'
import LogOut from '../../components/LogOut/LogOut'
import * as postAPI from '../../utilities/posts-api'

export default function HomePage(
    {user, setUser}
){
    const [allPosts, setAllPosts] = useState(null)
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
            <NavBar user={user} />
            <LogOut user={user} setUser={setUser}/>
            <PostCreateForm user={user}/>
        
            {
                allPosts && <PostList allPosts={allPosts}/>
            }
            
        </>
    )
}