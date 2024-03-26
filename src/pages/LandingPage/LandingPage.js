import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './LandingPage.module.scss'

export default function LandingPage({
    setUser
}){

    const navigate = useNavigate()

    const handleFindRestaurants = () => {
        navigate('/restaurants')
    }

    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showSignUpForm, setShowSignUpForm] = useState(false)

    return(
        <div className={styles.landingPage}>
            <div className={styles.headerContainer}>

                <div className={styles.logoContainer}>
                    <img className={styles.logo} src="https://i.imgur.com/TxFQTR4.png"/>
                    <div className={styles.companyName}>
                        <h1>Share-A-Bite</h1>
                    </div>
                </div>

                <div className={styles.authContainer}>
                    <button className={styles.blackBtn} onClick={(e)=>{setShowLoginForm(!showLoginForm); setShowSignUpForm(false)}}>Login</button>
                    <button className={styles.whiteBtn} onClick={(e)=>{setShowSignUpForm(!showSignUpForm); setShowLoginForm(false)}}>Sign Up</button>
                </div>

            </div>


             {(showLoginForm||showSignUpForm)?
               <div className = {styles.wrapper}>
                <div className={styles.showforms}>
                    {showLoginForm?<LoginForm setUser={setUser} setShowLoginForm={setShowLoginForm}/>:<></>}
                    {showSignUpForm?<SignUpForm setUser={setUser} setShowSignUpForm={setShowSignUpForm} />:<></>}
                </div>
               </div>
            :<></> }
        
           
            <div className={styles.heroContainter}>
                <img className={styles.heroImg} src="https://i.imgur.com/du34eku.jpeg"/>
                <div className={styles.heroOverlay}>
                    <h2>Serving up deliciousness.</h2>
                    <SearchBar/>
                </div>
            </div>

            <div className={styles.highlightsContainer}>
                <div className={styles.highlight}>
                    <h3>Connect with friends.</h3>
                    <p>Craft personalized posts, tag your go-to restaurants, and showcase your culinary delights through stunning photos. </p>
                    <img className={styles.highlightImg} src="https://i.imgur.com/rbOY9kf.png"/>
                </div>
                <div className={styles.highlight}>
                    <h3>Get restaurant recommendations.</h3>
                    <p>From mouth-watering dishes to hidden gems, explore diverse cuisines and trendy eateries shared by your network. Say goodbye to dining dilemmas and let your friends guide you to the best spots in town.</p>
                    <img className={styles.highlightImg} src='https://i.imgur.com/RMlTNjI.png'/>
                </div>
                <div className={styles.highlight}>
                    <h3>Get the best Share-A-Bite experience.</h3>
                    <p>Whether you're a foodie or simply love good company, our platform makes it easy to schedule restaurant meetups, turning every meal into a memorable experience. Login now or download the App.</p>
                    <img className={styles.highlightImg} src="https://i.imgur.com/IFyfrUl.png"/>
                </div>
            </div>

            <div className={styles.promoContainer}>
                <div className={styles.promoCol1}>
                    <h3>Every foodie-thing you crave.</h3>
                    <h4>Your favorite local restaurants</h4>
                    <p>Get a slice of pizza or the whole pie, or lo mein from the Chinese takeout spot you've been meaning to try.</p>
                    <button className={styles.restaurantBtn} onClick={handleFindRestaurants}>Find restaurants</button>
                </div>
                <img className={styles.featureImg} src="https://i.imgur.com/Syw6ubz.jpeg"/>
            </div>

            <div className={styles.postSampler}>
                <p>Post sampler - will contain 3 most recent posts</p>
                {/* showcase a few things in the post list, ex. last 3 posts */}
            </div>

            <div className={styles.footer}>
                <div className={styles.footerColumns}>
                    <h4>About</h4>
                    <Link to="/"> About Us </Link>
                    <Link to="/"> Careers </Link>
                    <Link to="/"> Investors </Link>
                    <Link to="/"> Company Blog </Link>
                    <Link to="/"> Promotions </Link>
                    <Link to="/"> Accessibility </Link>
                    <Link to="/"> News Room </Link>
                </div>
                <div className={styles.footerColumns}>
                    <h4>Discover</h4>
                    <Link to="/"> Feed </Link>
                    <Link to="/"> Restaurants </Link>
                    <Link to="/"> Account Details </Link>
                    <Link to="/"> Collection </Link>
                </div>
                <div className={styles.footerColumns}>
                    <h4>Share-A-Bite for Business</h4>
                    <Link to="/"> Business Owner Login </Link>
                    <Link to="/"> Claim your Business Page </Link>
                    <Link to="/"> Advertise </Link>
                    <Link to="/"> Table Management </Link>
                    <Link to="/"> Business Success Stories </Link>
                    <Link to="/"> Business Support </Link>
                    <Link to="/"> Blog for Business </Link>
                </div>
                <div className={styles.footerColumns}>
                    <Link to="/"><img className={styles.badge} src="https://i.imgur.com/ieDYEcR.png"/></Link>
                    <Link to="/"><img className={styles.badge} src="https://i.imgur.com/ZgoWZUM.png"/></Link>
                </div>

                
            </div>

            <div className={styles.footerBottom}>
            <p>Share-A-Bite © 2024. All rights reserved.</p>
            </div>
                     
        </div>

    )
}