import { createComment } from '../../utilities/comments-api';

export default function CreateCommentForm({ postId, comment,setComment}) {

    function handleChange(e) {
        setComment({ ...comment, [e.target.name]: e.target.value });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            // Call the createComment function to upload the comment
            await createComment(postId, comment);
            console.log('Comment successfully uploaded');
            // Reset the comment state after successful upload
            setComment({ body: '' });
        } catch (error) {
            console.error('Error uploading comment:', error);
        }
    }

    return (
        <>
            <br/>
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type='text'
                    placeholder='Add a comment'
                    value={comment.body}
                    name='body'
                    onChange={handleChange}
                    style={{ width: '100%', marginRight: '5px' }}
                />
                <button type='submit' style={{ fontSize: '15px', textAlign: 'center' }}>Comment</button>
            </form>
            <br/>
        </>
    );
}
