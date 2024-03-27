import React, { useEffect, useState } from "react"
import { getAllRestaurants, getIndividualRestaurant } from '../../utilities/restaurants-api'
import styles from "./Restaurant.module.scss";

const RestaurantComponent = ({ user }) => {
    const [restaurant, setRestaurant] = useState(null)
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetchAllRestaurants()
    }, [])

    const fetchAllRestaurants = async () => {
        try {
            const restaurants = await getAllRestaurants()
            setRestaurants(restaurants)
            if (restaurants.length > 0) {
                fetchIndividualRestaurant(restaurants[0]._id)
            }
        } catch (error) {
            console.error('Cannot fetch all restaurants', error)
        }
    }

    const fetchIndividualRestaurant = async (restaurantId) => {
        try {
            const restaurant = await getIndividualRestaurant(restaurantId)
            setRestaurant(restaurant)
        } catch (error) {
            console.error('Cannot fetch restaurant', error)
        }
    }

    return (
        <div>
            {restaurant && <h1>{restaurant.name}</h1>}
            
            {restaurants.map(restaurant => (
                <div key={restaurant._id}>
                    <h2>{restaurant.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default RestaurantComponent

