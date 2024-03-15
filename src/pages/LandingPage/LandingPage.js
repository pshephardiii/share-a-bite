import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigation } from '../../components/NavBar'
import Restaurant from '../../components/Restaurant/Restaurant'
import RestaurantList from '../../components/RestaurantList/RestaurantList'
import RestaurantSampler from '../../components/RestaurantSampler/RestaurantSampler'

export default function LandingPage(
    { user, setUser }
){
    const [restaurant, setRestaurant] = useState('')
    const [restaurants, setRestaurants] = useState([])
    const [restaurantSampler, setRestaurantSampler] = useState([])

    const navigate = useNavigate()

    return{
       
    }
}