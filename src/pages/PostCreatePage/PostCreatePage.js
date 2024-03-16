import {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PostCreateForm from '../../components/PostCreateForm/PostCreateForm'
export default function HomePage(
    {user, setUser}
){

    return(
        <>
            <NavBar user={user} />
            <PostCreateForm user={user}/>
        </>
    )
}