import { useEffect, useState } from 'react'

const favRestaurantComponent = () => {
    const [favoriteRestaurants, setFavoriteRestaurants] = useState([])

    return { favoriteRestaurants }
}

export default favRestaurantComponent