import ShowPagePost from '../../components/ShowPagePost/ShowPagePost'
import styles from './ShowPagePosts.module.scss'
export default function({allPosts}){
    return(
        <div className={styles.ShowPagePosts}>
        <div className={styles.gridContainer} >
        {
            allPosts.map(post=>{
                return (
                    <ShowPagePost 
                    key={post._id}
                    post={post}/>
                    )
            }  
            )
        }
        </div>
        </div>
    )
}