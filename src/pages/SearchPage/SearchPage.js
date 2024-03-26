import {useState, useEffect} from 'react'
import * as postAPI from '../../utilities/posts-api'
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import PostList from '../../components/PostList/PostList'

export default function SearchPage({user, setUser}){

    const [searchInput, setSearchInput]= useState('')
    const [searchedItems, setSearchedItems] = useState([])
    //get all the posts 
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
    
    //to filter the input that match the post title and post dish 
    useEffect(function(){
        if(allPosts){
            const data = allPosts.filter(post => post.title.toLowerCase().includes(searchInput.toLowerCase().trim())||post.dish.toLowerCase().includes(searchInput.toLowerCase().trim())||
            post.user.name.toLowerCase().includes(searchInput.toLowerCase().trim())||post.restaurant.name.toLowerCase().includes(searchInput.toLowerCase().trim()))
            setSearchedItems(data)
        } 
    },[searchInput])

    return (
       <>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
        {searchedItems.length > 0 ? (<PostList allPosts={searchedItems}/>):(
                <p>No matching posts found.</p>
            )}
        <NavBar user={user} setUser={setUser}/>
       </>
    )
}

