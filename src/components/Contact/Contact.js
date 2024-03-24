import styles from "./Contact.module.scss"

export default function Contact({
    contact}){
    return(
        <div className={styles.contact}> 
        
        <h1>{contact.name}</h1>
           
        </div>
    )
}