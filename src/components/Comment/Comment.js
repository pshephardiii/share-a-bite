import styles from './Comment.module.scss'
import React, { useState } from 'react'
import { likeComment, unlikeComment } from '../../utilities/comments-api'
import { Heart } from 'lucide-react'

export default function Comment({ comment }) {

    const [liked, setLiked] = useState(false)

    async function handleLikeComment(CommentId) {
        try {
            await likeComment(CommentId)
            console.log('Comment successfully liked')
        } catch (error) {
            console.error('Error liking comment:', error)
        }
    }

    async function handleUnlikeComment(CommentId) {
        try {
            await unlikeComment(CommentId)
            console.log('Comment successfully unliked')
        } catch (error) {
            console.error('Error unliking comment:', error)
        }
    }

    return (
        <div className={styles.totalContainer}>
        <div className={styles.commentContainer}>
            <div className={styles.comment}>
                <h4>{comment.user.name}</h4>
                <h5>{comment.body}</h5>
            </div>
            <div className={styles.heart}>
                {liked ? (
                    <Heart
                        style={{ color: 'red', fill: 'red', fontSize: '30px' }}
                        onClick={() => {
                            setLiked(false)
                            handleUnlikeComment(comment._id)
                        }}
                    />
                ) : (
                    <Heart
                        color="gray"
                        fontSize="30px"
                        onClick={() => {
                            setLiked(true)
                            handleLikeComment(comment._id)
                        }}
                    />
                )}
            </div>
            </div>
            <br />
        </div>
    )
}
