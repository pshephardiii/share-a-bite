import styles from './ContactList.module.scss'
import Contact from '../../components/Contact/Contact'
 
export default function ContactList ({ 
    user,
    contacts,
    userId,
    deleteContact
}){
    const userContacts = contacts.map(contact =>
        <Contact
            key={contact._id}
            user={user}
            contact={contact}
            deleteContact={deleteContact}
        />
    )

    return(
        contacts ?
        <div className={styles.contactlistContainer}>
            <h3>ContactList</h3> 
            <div className={styles.userContacts}>
            {userContacts}</div>  
        </div>
        :
        <h3>No Contacts Yet!</h3>
        ) 
    }

