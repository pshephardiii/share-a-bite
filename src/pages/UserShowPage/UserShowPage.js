import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { useParams } from 'react-router-dom'
import * as userAPI from '../../utilities/users-api'
import * as postsAPI from '../../utilities/posts-api'
import * as restaurantsAPI from '../../utilities/restaurants-api'
import {logOut} from '../../utilities/users-service'
import ContactList from '../../components/ContactList/ContactList'
import PostList from '../../components/PostList/PostList'
import UpdateUserForm from '../../components/UpdateUserForm/UpdateUserForm'
import FavRestaurantList from '../../components/FavRestaurantList/FavRestaurantList'
import Contact from '../../components/Contact/Contact'
import Post from '../../components/Post/Post'
import FavRestaurant from '../../components/FavRestaurant/FavRestaurant'
import styles from './UserShowPage.module.scss'
import ShowPagePosts from '../../components/ShowPagePosts/ShowPagePosts'


export default function UserShowPage(
    { user, setUser }
){
    const {userId} = useParams() 
    console.log(userId)
    console.log(user)
    //below is to show the current logged-in user's info

    const [contacts, setContacts] = useState([])
    const [posts, setPosts] = useState([])
    const [favRestaurants, setFavRestaurants] = useState([])
    const [showUpdateUserForm, setShowUpdateUserForm] = useState(false)


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
                    setPosts(newData)
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

    const deleteAccount = async(userId) =>{
        try{
            await userAPI.deleteUser(userId)
            console.log('succeeded in deleting this account')
        }catch(error){
            console.log(error)
        }
    }
    const addContact = async(userId) =>{
        try{
            await userAPI.addContact(userId)
            console.log('succeeded in adding this new contact')
        }catch(error){
            console.log(error)
        }
    }

    const deleteContact = async(userId) =>{
        try{
            await userAPI.deleteContact(userId)
            console.log('succeeded in deleting this new contact')
        }catch(error){
            console.log(error)
        }
    }
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
          <ContactList contacts={contacts} user={user} userId={userId}/> 
          {/* following and add contact */}
          {
            user._id !== userId && !user.contacts.includes(userId)? <button onClick={()=>addContact(userId)}>following</button>:<></>
          }
          {/* unfollowing and delete contact */}
           {
            user._id !== userId && user.contacts.includes(userId)? <button onClick={()=>addContact(userId)}>unfollowing</button>:<></>
          }

          {/* <PostList allPosts={posts} user={userId}/> */}
          <ShowPagePosts allPosts={posts} user={userId}/>

          {/* click button to display or hid the UpdateUserForm*/}
          {user._id === userId?  <button onClick={()=>setShowUpdateUserForm(true)}>Edit profile</button>:<></>}

          {showUpdateUserForm? 
          <UpdateUserForm userId={userId} user={user} setUser={setUser} setShowUpdateUserForm={setShowUpdateUserForm}/>
          :<></>}
          
          {/* {user._id === userId?  <button onClick={()=>{deleteAccount(userId),logOut()}}>Delete User</button>:<></>} */}

        
          <FavRestaurantList restaurants={favRestaurants} user={user}/> 
          {/* Below is to show the any user's profile */}
          {/* <ContactList newContacts={newContacts}/>
          <PostList newPosts={newPosts}/>
          <UpdateUserForm/> */}
          <img className={styles.profilePic} src="https://picsum.photos/200"/>
          {user.name}
          {user.email}
          <NavBar user={user} setUser={setUser}/>
        </>
       
    )
}