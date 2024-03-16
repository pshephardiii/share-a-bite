import { Link } from "react-router-dom";
import {useState} from 'react'
import styles from "./NavBar.module.scss";
// import UserLogOut from "../UserLogOut/UserLogOut";
import { Home, Search, SquarePlus, User } from 'lucide-react';




export default function NavBar(
    {user,setUser}
){
     
//   const [showSearchPage, setShowSearchPage] = useState(false)
//   const [showNewPostPage, setShowNewPostPage] = useState(false)
    return (
        <div>
        <Link to="/home"><Home size={48}/></Link> 

        
        {/*This is allow to go to a different page, this is we will use for now*/}
        <Link to="/searchpage"><Search to="/searchPage"size={48}/></Link>
        <Link to='/createnewpostpage'><SquarePlus size={48}/></Link>
         
        {/*Below allows pop up and and no new pages need to be set up in routes
         <Search to="/searchPage"size={48} onClick={(e)=>{setShowSearchPage(!showSearchPage)}}/>
        <SquarePlus size={48} onClick={(e)=>{setShowNewPostPage(!showNewPostPage)}}/>
         */}
       
        <Link to={`/usershowpage/${user._id}`}><User size={48}/></Link>{/* so we can reuse the usershowpage */}
        </div>
    )
}

