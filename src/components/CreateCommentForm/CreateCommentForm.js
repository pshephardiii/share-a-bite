import { useState } from 'react';
import { createComment } from '../../utilities/comments-api';

export default function CreateCommentForm() {
    const [comment, setComment] = useState({ body: '' });

    function handleChange(e) {
        setComment({ ...comment, [e.target.name]: e.target.value });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            // Call the createComment function to upload the comment
            await createComment(comment);
            console.log('Comment successfully uploaded');
            // Reset the comment state after successful upload
            setComment({ body: '' });
        } catch (error) {
            console.error('Error uploading comment:', error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='comment' 
                    value={comment.body} 
                    name='body' 
                    onChange={handleChange} 
                />
                <button type='submit'>Upload comment</button>
            </form>
        </>
    );
}