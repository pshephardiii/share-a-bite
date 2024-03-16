import React, { useState, useEffect } from 'react'
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import { Link, useNavigate } from 'react-router-dom'
import { Navigation } from '../../components/NavBar/NavBar'
import Restaurant from '../../components/Restaurant/Restaurant'
import RestaurantList from '../../components/RestaurantList/RestaurantList'
import RestaurantSampler from '../../components/RestaurantSampler/RestaurantSampler'


export default function LandingPage(props) {
    // { user, setUser } /* Does this go here, or on the home page? */
    const [showLogin, setShowLogin] = useState(true);
    const [restaurant, setRestaurant] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantSampler, setRestaurantSampler] = useState([]);
    const navigate = useNavigate();

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