import styles from "./Contact.module.scss"

export default function Contact({
    contact}){
    return(
        <div className={styles.contact}> 
        
        <h3>{contact.name}</h3>
           
        </div>
    )
}