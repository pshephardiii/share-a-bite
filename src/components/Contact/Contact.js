import styles from "./Contact.module.scss"

export default function Contact({ 
    contact}){
    return(
        <div className={styles.contact}> {contact}
           
        </div>
    )
}