import Post from '../../components/Post/Post'
import styles from './ShowPagePost.module.scss'
import { useState } from 'react'
import { CircleX } from 'lucide-react'

export default function ShowPagePost({ post }) {
    const [showPostDetails, setShowPostDetails] = useState(false)

    return (
        <div className={styles.ShowPagePost}>
            <img onClick={() => setShowPostDetails(true)} src={post.pic} className={styles.pageImgs} />

            {showPostDetails ? (
                <div className={styles.wrapper}>
                    <button className={styles.closePopup} onClick={() => setShowPostDetails(false)}>
                        <CircleX />
                    </button>
                    <div className={styles.showPost}>
                        <Post post={post} />
                    </div>
                </div>
            ) : <></>}
        </div>
    )
}