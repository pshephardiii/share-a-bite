import styles from "./NavBar.module.scss";
import { Home, Search, SquarePlus, User } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import LogOut from '../../components/LogOut/LogOut'

export default function NavBar(
    {user,setUser}
){

    const navigate = useNavigate()

    return (
        <div className={styles.NavBar}>
            <div className={styles.home} onClick={()=>{navigate('/home')}} ><Home size={48}/></div>
            <div className={styles.search} onClick={()=>{navigate('/search')}}><Search size={48}/></div>
            <div className={styles.createpost} onClick={()=>{navigate('/createpost')}}><SquarePlus size={48}/></div>
            <div className={styles.usershowpage} onClick={()=>{navigate(`/usershowpage/${user._id}`)}}><User size={48}/></div>
            <div className={styles.logout}><LogOut setUser={setUser}/></div>
        </div>
    )
}