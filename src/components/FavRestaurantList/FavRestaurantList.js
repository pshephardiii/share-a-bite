import styles from './FavRestaurantList.module.scss'
import Restaurant from '../../components/Restaurant/Restaurant'
 
export default function FavRestaurantList ({  
    user,
    restaurants,
    deleteRestaurant
}){
    return(
        restaurants ?
    <div>
        <h3 className={styles.favRestaurant}>FavRestaurantList</h3>
        {restaurants.map(restaurant =>(
            <Restaurant
                key={restaurant._id}
                user={user}
                restaurant={restaurant}
                
            />
        ))}
        </div> :
        <h3>No Favorites!</h3>
        ) 
    }

