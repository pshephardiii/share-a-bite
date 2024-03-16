import React, { useState, useEffect } from 'react'
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import { Link, useNavigate } from 'react-router-dom'
import { Navigation } from '../../components/NavBar/NavBar'
import Restaurant from '../../components/Restaurant/Restaurant'
import RestaurantList from '../../components/RestaurantList/RestaurantList'
import RestaurantSampler from '../../components/RestaurantSampler/RestaurantSampler'

// import Hero
// import Logo
// import other images

// search page (for search bar)

// const [restaurant, setRestaurant] = useState('')
// const [restaurants, setRestaurants] = useState([])
// const [restaurantSampler, setRestaurantSampler] = useState([])


// Landing page build

// use useEffect code for this 

// export default function LoginPopUpForm() {
//     const [isOpen, setIsOpen] = useState(false)
  
//     const togglePopup = () => {
//       setIsOpen(!isOpen)
//     }
  
//     return (
//       <div>
//         <button onClick={togglePopup}>Login</button>
  
//         {isOpen && (
//           <div className="loginform">
//             <LoginForm/>
//           </div>
//         )}
//       </div>
//     )
// }

// export default function SignUpPopUpForm() {
//     const [isOpen, setIsOpen] = useState(false)
  
//     const togglePopup = () => {
//       setIsOpen(!isOpen)
//     }
  
//     return (
//       <div>
//         <button onClick={togglePopup}>Sign Up</button>
  
//         {isOpen && (
//           <div className="loginform">
//             <SignUpPopUpForm/>
//           </div>
//         )}
//       </div>
//     )
// }



// Landing page structure

export default function LandingPage(){




    return(
        <div className='landingPage'>
            <div className='navHeaderContainter'>

                <div className='logoContainer'>
                    <div className='logo'>
                        {/* image */}
                    </div>
                    <div className='companyName'>
                        Share-A-Bite
                    </div>
                </div>

                {/* hero, search, etc.  */}

                <div className='authContainer'>
                    <Link to="/auth"> <h4>Login or Sign Up</h4> </Link>
                </div>

            </div>

            <div className='footer'>
                {/* links and corporate info */}
            </div>

            <div className='navFooter'>
                <NavBar/>
            </div>

        </div>

    )
}