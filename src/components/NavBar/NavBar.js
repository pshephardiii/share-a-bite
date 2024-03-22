import { Link } from "react-router-dom";
import {useState} from 'react'
import styles from "./NavBar.module.scss";
// import UserLogOut from "../UserLogOut/UserLogOut";
import { Home, Search, SquarePlus, User } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import LogOut from '../../components/LogOut/LogOut'




export default function NavBar(
    {user,setUser}
){
     
    const navigate = useNavigate()
//   const [showSearchPage, setShowSearchPage] = useState(false)
//   const [showNewPostPage, setShowNewPostPage] = useState(false)
    return (
        <div className={styles.NavBar}>
            <div className={styles.home} onClick={()=>{navigate('/home')}} ><Home size={48}/></div>
            <div className={styles.search} onClick={()=>{navigate('/search')}}><Search size={48}/></div>
            <div className={styles.createpost} onClick={()=>{navigate('/createpost')}}><SquarePlus size={48}/></div>
            <div className={styles.usershowpage} onClick={()=>{navigate(`/usershowpage/${user._id}`)}}><User size={48}/></div>
            <div><LogOut /></div>

        {/* <Link to="/search"><Home size={48}/></Link>
        <Link to="/search"><Search size={48}/></Link>
        <Link to='/createpost'><SquarePlus size={48}/></Link>
        <Link to={`/usershowpage/${user._id}`}><User size={48}/></Link> */}
        </div>
    )
}

 {/*Below allows pop up and and no new pages need to be set up in routes
         <Search to="/searchPage"size={48} onClick={(e)=>{setShowSearchPage(!showSearchPage)}}/>
        <SquarePlus size={48} onClick={(e)=>{setShowNewPostPage(!showNewPostPage)}}/>
         */}