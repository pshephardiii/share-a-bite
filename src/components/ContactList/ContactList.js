import styles from './ContactList.module.scss'
import Contact from '../../components/Contact/Contact'
 
export default function ContactList ({ 
    user,
    contacts,
    userId
}){
    const userContacts = contacts.map(contact =>
        <Contact
            key={contact._id}
            user={user}
            contact={contact}
        />
    )

    return(
        contacts ?
    <div>
        <h3>ContactList</h3>
        {userContacts}
        
        </div>
        :
        <h3>No Contacts Yet!</h3>
        ) 
    }

