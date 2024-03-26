import { deleteContact } from "../../utilities/users-api"
import styles from "./Contact.module.scss"

export default function Contact({
    contact, deleteContact}){
    return(
        <div className={styles.contact}> 
        
        <h3>{contact.name}</h3>
        <button onClick={()=>{deleteContact(contact._id)}}>unfollow</button>
           
        </div>
    )
}

