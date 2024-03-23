import styles from './ContactList.module.scss'
import Contact from '../../components/Contact/Contact'
 
export default function ContactList ({ 
    addContact, 
    setNewContact, 
    user,
    contacts,
    deleteContact
}){
    return(
    <div>
        <h3>ContactList</h3>
        {contacts.map(contact =>(
            <Contact
                key={contact._id}
                user={user}
                contact={contact}
                buttonAction={deleteContact}
                buttonText={'Delete'}
            />
        ))}
        </div>
        ) 
    }

