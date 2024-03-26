import Post from '../../components/Post/Post'
import styles from './ShowPagePost.module.scss'
import {useState} from 'react'
import { CircleX } from 'lucide-react'
export default function({post}){
    const[showPostDetails, setShowPostDetails] = useState(false)
    return(
        <div className = {styles.ShowPagePost}>
         <img onClick={()=>setShowPostDetails(true)} src={post.pic} />

         {showPostDetails?
           <div className = {styles.wrapper}>
                <div className={styles.showPost}>
                     <button className={styles.close}onClick={()=>setShowPostDetails(false)} ><CircleX /></button>
                     <Post post={post} /> 
                 </div>
           </div>
          :<></>}
        </div>
    )
}