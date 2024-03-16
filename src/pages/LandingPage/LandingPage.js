import React, { useState, useEffect } from 'react'
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import { Link, useNavigate } from 'react-router-dom'
import { Navigation } from '../../components/NavBar'
import Restaurant from '../../components/Restaurant/Restaurant'
import RestaurantList from '../../components/RestaurantList/RestaurantList'
import RestaurantSampler from '../../components/RestaurantSampler/RestaurantSampler'

// const [restaurant, setRestaurant] = useState('')
// const [restaurants, setRestaurants] = useState([])
// const [restaurantSampler, setRestaurantSampler] = useState([])

export default function Auth(props) {
    // { user, setUser } /* Does this go here, or on the home page? */
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div className={styles.authButton}>
            {showLogin ? (
                <>
                    <button onClick={() => setShowLogin(true)}>Login</button>
                    <Link to="/signup">Sign Up</Link>
                </>
            ) : (
                <>
                    <button onClick={() => setShowLogin(false)}>Sign Up</button>
                    <Link to="/login">Login</Link>
                </>
            )}
            { !showLogin ? <SignUpForm signUp={props.signUp}/> : <LoginForm login={props.login}/>}
        </div>
    )
}

// location of NavBar === bottom of page, like Instagram
// update NavBar with Icons in place of words

export default function NavBar(props) {
    const navigate = useNavigate()

    const handleHomeClick = () => {
        navigate('/home')
    }

    const handleSearchClick = () => {
        navigate('/search')
    }

    const handleNewPostClick = () => {
        navigate(`${user._id}/posts`)
    }

    const handleFavRestaurantClick = () => {
        navigate(`${user._id}/restaurants`)
    }

    return (
        <div className={styles.navBar}>
            <button onClick={handleHomeClick}>Home</button>
            <button onClick={handleSearchClick}>Search</button>
            <button onClick={handleNewPostClick}>Post</button>
            <button onClick={handleFavRestaurantClick}>Favs</button>
        </div>
    )
}