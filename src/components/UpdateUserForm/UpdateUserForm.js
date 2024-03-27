import {updateUser}from '../../utilities/users-api'
import { CircleX } from 'lucide-react'
import styles from './UpdateUserForm.module.scss'

export default function UpdateUserForm(
    {user, setUser,setShowUpdateUserForm}
){
    const handleChange=(e) => {
        setUser({...user, [e.target.name]: e.target.value})

    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await updateUser(user._id, user) 
            console.log(user)
        } catch(error){
            console.error(error)
        }
    }
    return (
        <div className={styles.UpdateUserForm}>
            <>
               
                     <h1>Update User Info</h1>
                
                
                <form  
                onSubmit={handleSubmit}>
                    <input type='text' placeholder='name' name='name' value={user.name} onChange={handleChange}/>
                    <input type='email' placeholder='email' name='email' value={user.email} onChange={handleChange}/>
                    <input type='password' placeholder='password' name='password' value={user.password} onChange={handleChange}/>
                    <button className= {styles.submitButton} type='submit'  value='Submit Update Data'>Submit</button>
                </form>
        
                <div onClick={(e)=>{setShowUpdateUserForm(false)}}><CircleX /></div>
             </>
        </div>
    )
}