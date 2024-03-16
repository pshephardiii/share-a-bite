import {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar'
import PostCreateForm from '../../components/PostCreateForm/PostCreateForm'
import PostList from '../../components/PostList/PostList'
import LogOut from '../../components/LogOut/LogOut'
import * as postAPI from '../../utilities/posts-api'

export default function HomePage(
    {user, setUser}
){
    const [allPosts, setAllPosts] = useState([])
    const [showCreate, setShowCreate] = useState(false)
     
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

    useEffect(() => {
        if(localStorage.token && !props.token){
            props.setToken(localStorage.getItem('token'))
            setShowCreate(true)
        }
        if(localStorage.token && localStorage.user && !props.user){
            props.setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [])

    console.log(allPosts)
    return(
        <>
            <NavBar/>
            <LogOut user={user} setUser={setUser}/>
            <PostCreateForm user={user}/>
            {
                allPosts.length>0?<PostList allPosts={allPosts}/>:<></>  
            }
            
        </>
    )
}