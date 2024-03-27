import styles from "./Contact.module.scss"
import { useNavigate } from "react-router-dom"


export default function Contact({
    contact, deleteContact}){
    const navigate = useNavigate()
    return(
        <div className={styles.contact}> 

            <h3 onClick={()=>navigate(`/usershowpage/${contact._id}`)}>{contact.name}</h3>
            <div onClick={()=>navigate(`/usershowpage/${contact._id}`)}><img className={styles.profilePic} src={contact.pic} /></div>
            <div className={styles.button}> 
            <button onClick={()=>{deleteContact(contact._id)}}>unfollow</button>
            </div>
        
        </div>
    )
}

