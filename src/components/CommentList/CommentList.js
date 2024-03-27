import Comment from '../Comment/Comment'

export default function CommentList(
    {comments}
){
    return(
        <div className={StyleSheet.commentList}>
        {
            comments.length>0 && (comments.map(comment=>(
                <Comment 
                key={comment._id}
                comment={comment}/>
            )))
        }
        </div>
    )
}