import { Component } from "react"
import { getAllRestaurants, getIndividualRestaurant } from '../../utilities/restaurants-api'

class RestaurantComponent extends Component {
    componentDidMount() {
        this.fetchAllRestaurants()
        this.fetchIndividualRestaurant(restaurant._id)
    }

    async fetchAllRestaurants() {
        try {
            const restaurants = await getAllRestaurants()
        } catch (error) {
            console.error('Cannot fetch all restaurants', error)
        }
    }

    async fetchIndividualRestaurant(restaurantId) {
        try {
            const restaurant = await getIndividualRestaurant(restaurantId)
        } catch (error) {
            console.error('Cannot fetch restaurant', error)
        }
    }

    render() {
        const { restaurant, restaurants } = this.state

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
}

export default RestaurantComponent

