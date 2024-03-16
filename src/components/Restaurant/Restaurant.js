import styles from "./Restaurant.module.scss"

export default function Restaurant({ Restaurant, buttonAction, buttonText}){
    return(
        <div className={styles.contact}> {restaurant.title}
            <button 
                className={styles.button}
                onClick={() => buttonAction(restaurant._id)}
            >
                {buttonText}
            </button>
        </div>
    )
}