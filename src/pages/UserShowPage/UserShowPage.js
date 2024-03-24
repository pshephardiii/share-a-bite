import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { useParams } from 'react-router-dom'
import * as userAPI from '../../utilities/users-api'
import * as postsAPI from '../../utilities/posts-api'
import * as restaurantsAPI from '../../utilities/restaurants-api'
import ContactList from '../../components/ContactList/ContactList'
import PostList from '../../components/PostList/PostList'
import UpdateUserForm from '../../components/Post/Post'
import FavRestaurantList from '../../components/FavRestaurantList/FavRestaurantList'
import Contact from '../../components/Contact/Contact'
import Post from '../../components/Post/Post'
import FavRestaurant from '../../components/FavRestaurant/FavRestaurant'
import styles from './UserShowPage.module.scss'


export default function UserShowPage(
    { user, setUser }
){
    const {userId} = useParams() 
    console.log(userId)
    //below is to show the current logged-in user's info

    const [contacts, setContacts] = useState([])
    const [posts, setPosts] = useState([])
    const [profilePic, setProfilePic] = useState([])
    const [favRestaurants, setFavRestaurants] = useState([])



    useEffect(function(){
        // async function getAllPosts(){
        //    try{
        //     const data = await postsAPI.getAllUserPosts(userId)
        //     setPosts(data)
        //    } catch(error){
        //     console.log(error)
        //    }
        // }
        async function getAllPosts(){
               try{
                const data = await userAPI.showUser(userId)
                if(data){
                    const newData = data.user.posts
                    const newPic = data.user.pic
                    setPosts(newData)
                    setProfilePic(newPic)
                }
               } catch(error){
                console.log(error)
               }
            }
        
        async function getAllUserFav(){
            try{
             const data = await restaurantsAPI.getAllUserFav(userId)
             setFavRestaurants(data)
            } catch(error){
             console.log(error)
            }
         }
         async function getAllContacts(){
            try {
                const data = await userAPI.contactIndex()
                setContacts(data)
            } catch (error) {
                console.log(error)
            }
         }
            getAllPosts()
            getAllUserFav()
            getAllContacts()
    },[])

    //below is to make it versatile and show any user's info & this requires passing down the params --userId
    // const [newUser, setNewUser] = useState(user)
    // const [newContacts, setNewContacts] = useState(user[contacts])
    // const [newPosts, setNewPosts] = useState(user[posts])
    // const [newFavRestaurants, setNewFavRestaurants] = useState(user[favRestaurants])
    // const newUserId = useParams()
    // useEffect(function(){
    //     async function fetchNewUser(){
    //         try{
    //             const data = await userAPI.showUser(newUserId)
    //             setNewUser(data)
    //         }catch(error){
    //             console.log(error)
    //         }
    //     }
    //     fetchNewUser()
    // },[newUser])

    // useEffect(()=>{
    //     setNewContacts(newUser[contacts])
    //     setNewPosts(newUser[posts])
    //     setNewFavRestaurants(newUser[favRestaurants])
    // }
    // ,[newUser])

    return(
        <>
          {/* Below is only show the current loggedin user's profile */}
          <img src={profilePic}/>
          <ContactList contacts={contacts} user={user}/> 
          <PostList allPosts={posts} user={user}/>
          <UpdateUserForm user={user}/> {/* might display a button and use onclick function to show the form*/}
          <FavRestaurantList restaurants={favRestaurants} user={user}/> 
          {/* Below is to show the any user's profile */}
          {/* <ContactList newContacts={newContacts}/>
          <PostList newPosts={newPosts}/>
          <UpdateUserForm/> */}
          <img className={styles.profilePic} src="https://picsum.photos/200"/>
          {user.name}
          {user.email}
          <NavBar user={user}/>
        </>
       
    )
}