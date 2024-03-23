import styles from "./Contact.module.scss"

export default function Contact({ user,
    contact}){
    return(
        <div className={styles.contact}> 
        
        <h1>{contact.name}</h1>
           
        </div>
    )
}