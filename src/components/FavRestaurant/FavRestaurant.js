import { useEffect, useState } from 'react'
import { getFavoriteRestaurants } from '../../utilities/restaurants-api'

const favRestaurantComponent = () => {
    const [favoriteRestaurants, setFavoriteRestaurants] = useState([])

    useEffect(() => {
        fetchFavoriteRestaurants()
    }, [])

    const fetchFavoriteRestaurants = async () => {
        try {
            const favorites = await getFavoriteRestaurants()
            setFavoriteRestaurants(favorites);
        } catch (error) {
            console.error("Can't get fav restaurants", error)
        }
    };

    return { favoriteRestaurants }
}

export default favRestaurantComponent