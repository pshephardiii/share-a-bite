import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import RestaurantSampler from '../../components/RestaurantSampler/RestaurantSampler'

export default function LandingPage(){

    const navigate = useNavigate()

    const handleFindRestaurants = () => {
        navigate('/restaurants')
    }

    const handleLoginOrSignup = () => {
        navigate('/auth')
    }

    return(
        <div className='landingPage'>
            <div className='navHeaderContainter'>

                <div className='logoContainer'>
                    <div className='logo'>
                        <img src="https://i.imgur.com/TxFQTR4.png"/>
                    </div>
                    <div className='companyName'>
                        <h1>Share-A-Bite</h1>
                    </div>
                </div>

                <div className='authContainer'>
                    <button onClick={handleLoginOrSignup}>Login</button>
                    <button onClick={handleLoginOrSignup}>Sign Up</button>
                </div>

            </div>

            <div className='heroContainter'>
                <img className='hero-image' src="https://i.imgur.com/AVOCmbz.jpeg"/>
                <div className='hero-overlay'>
                    <h2>Serving up deliciousness.</h2>
                    <SearchBar/>
                </div>
            </div>

            <div className='highlights-container'>
                <div className='highlight-1'>
                    <h3>Connect with friends.</h3>
                    <p>Craft personalized posts, tag your go-to restaurants, and showcase your culinary delights through stunning photos. </p>
                    <img src="https://i.imgur.com/rbOY9kf.png"/>
                </div>
                <div className='highlight-2'>
                    <h3>Get restaurant recommendations.</h3>
                    <p>From mouth-watering dishes to hidden gems, explore diverse cuisines and trendy eateries shared by your network. Say goodbye to dining dilemmas and let your friends guide you to the best spots in town.</p>
                    <img src='https://i.imgur.com/RMlTNjI.png'/>
                </div>
                <div className='highlight-3'>
                    <h3>Get the best Share-A-Bite experience.</h3>
                    <p>Whether you're a foodie or simply love good company, our platform makes it easy to schedule restaurant meetups, turning every meal into a memorable experience. Login now or download the App.</p>
                    <img src="https://i.imgur.com/IFyfrUl.png"/>
                </div>
            </div>

            <div className='promo-container'>
                <div className='column-1'>
                    <h3>Every foodie-thing you crave.</h3>
                    <h4>Your favorite local restaurants</h4>
                    <p>Get a slice of pizza or the whole pie, or lo mein from the Chinese takeout spot you've been meaning to try.</p>
                    <button onClick={handleFindRestaurants}>Find restaurants</button>
                </div>
                <img src="https://i.imgur.com/Syw6ubz.jpeg"/>
            </div>

            <div className='post-sampler'>
                <RestaurantSampler/>
                <RestaurantSampler/>
                <RestaurantSampler/>
            </div>

            <div className='footer'>
                <div className='col1'>
                    <h4>About</h4>
                    <Link to="/"> About Us </Link>
                    <Link to="/"> Careers </Link>
                    <Link to="/"> Investors </Link>
                    <Link to="/"> Company Blog </Link>
                    <Link to="/"> Promotions </Link>
                    <Link to="/"> Accessibility </Link>
                    <Link to="/"> News Room </Link>
                </div>
                <div className='col2'>
                    <h4>Discover</h4>
                    <Link to="/"> Feed </Link>
                    <Link to="/"> Restaurants </Link>
                    <Link to="/"> Account Details </Link>
                    <Link to="/"> Collection </Link>
                </div>
                <div className='col3'>
                    <h4>Share-A-Bite for Business</h4>
                    <Link to="/"> Business Owner Login </Link>
                    <Link to="/"> Claim your Business Page </Link>
                    <Link to="/"> Advertise </Link>
                    <Link to="/"> Table Management </Link>
                    <Link to="/"> Business Success Stories </Link>
                    <Link to="/"> Business Support </Link>
                    <Link to="/"> Blog for Business </Link>
                </div>
                <div className='col4'>
                    <img src="https://i.imgur.com/ieDYEcR.png"/>
                    <img src="https://i.imgur.com/ZgoWZUM.png"/>
                </div>

                <div className='bottom'>
                <p>Share-A-Bite © 2024. All rights reserved.</p>
                </div>
            </div>

            <div className='navFooter'>
                <NavBar/>
            </div>

        </div>

    )
}