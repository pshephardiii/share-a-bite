import styles from './FavRestaurantList.module.scss'
import Restaurant from '../../components/Restaurant/Restaurant'
 
export default function FavRestaurantList ({  
    user,
    restaurants,
    deleteRestaurant
}){
    return(
    <div>
        <h3>FavRestaurantList</h3>
        {restaurants.map(restaurant =>(
            <Restaurant
                key={restaurant._id}
                user={user}
                restaurant={restaurant}
                
            />
        ))}
        </div>
        ) 
    }

