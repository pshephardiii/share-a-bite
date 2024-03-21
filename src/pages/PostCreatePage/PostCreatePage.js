import {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PostCreateForm from '../../components/PostCreateForm/PostCreateForm'
import styles from './PostCreatePage.module.scss'
export default function HomePage(
    {user, setUser}
){

    return(
        <div className={styles.postCreatePage}>
            <NavBar user={user} />
            <PostCreateForm user={user}/>
        </div>
    )
}