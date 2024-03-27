const Comment = require('../../models/comment')
const Post = require('../../models/post')


module.exports = {
   indexComments,
   showComment,
   createComment,//auth
   updateComment, //auth
   deleteComment, //auth
   likeComment, //auth
   unlikeComment, //auth
   replyComment, //auth
   jsonComments,
   jsonComment
}


function jsonComments(_, res){
   res.json(res.locals.data.comments)
}


function jsonComment(_, res){
   res.json(res.locals.data.comment)
}

/********* show all the comments */
async function indexComments(req, res, next) {
   try {
       const comments = await Comment.find({}).populate('user')
       res.locals.data.comments=comments
       next()
   } catch(error) {
       res.status(400).json({ msg: error.message })
   }
}

/********* show one comment */
async function showComment(req, res, next) {
   try {
       const comment = await Comment.find({_id: req.params.id}).populate('user')
       res.locals.data.comment=comment
       next()
   } catch(error) {
       res.status(400).json({ msg: error.message })
   }
}

/********* create a comment */
//router.post('/:postId/comment', userController.auth, postController.createComment)
async function createComment(req, res, next) {
   try {
       //add the user to the comment model.
       // add the post id to the comment model
       req.body.user = req.user._id
       req.body.post = req.params.postId
       const comment = await Comment.create(req.body)

       // add the comment to the user model
       req.user.comments.addToSet(comment)
       await req.user.save()


       // need to find the post, add the comment id to the post
       const foundpost = await Post.findOne({_id: req.params.postId})
       foundpost.comments.addToSet(comment)
       await foundpost.save()

       res.locals.data.comment=comment
       next()
   } catch(error) {
       res.status(400).json({ msg: error.message })
   }
}



/********* update the comment */
async function updateComment(req, res, next) {
   try {
       const comment = await Comment.findOneAndUpdate({_id:req.params.id}, req.body, {new: true})
       res.locals.data.comment=comment
       next()
   } catch(error) {
       res.status(400).json({ msg: error.message })
   }
}

/********* delete the comment */
async function deleteComment(req, res, next) {
   try {
       const comment = await Comment.findOneAndDelete({_id:req.params.id})
       req.user.comments.pull(comment)
       await req.user.save()
       res.locals.data.comment=comment
       next()
   } catch(error) {
       res.status(400).json({ msg: error.message })
   }
}


/********* show the comment */
async function likeComment(req, res, next) {
   try {
       const comment = await Comment.findOne({_id:req.params.id})
       const commentWriter = comment.user 
       const user = req.user

       // user can not like their own comment
       // add the userId to the comment.likedBy array
       if(commentWriter !== user._id && !comment.likedBy.includes(user._id)){
           comment.likedBy.addToSet(user._id)
           await comment.save()
       }
       
       res.locals.data.comment=comment
       next()
   } catch(error) {
       res.status(400).json({ msg: error.message })
   }
}

async function unlikeComment(req, res, next) {
    try {
        const comment = await Comment.findOne({_id:req.params.id})
        const commentWriter = comment.user 
        const user = req.user
 
       
        // remove the userId from the comment.likedBy array
        if(commentWriter !== user._id && comment.likedBy.includes(user._id)){
            const index = comment.likedBy.indexOf(user._id)
            comment.likedBy.splice(index, 1)
            await comment.save()
        }
        
        res.locals.data.comment=comment
        next()
    } catch(error) {
        res.status(400).json({ msg: error.message })
    }
 }


/********* reply to the comment */
async function replyComment(req, res, next){
   try {
       const foundComment = await Comment.findOne({_id: req.params.commentId})
       const newComment = await Comment.create(req.body)
       foundComment.Replies.addToSet(newComment)
       await foundComment.save()
       res.locals.data.comment=foundComment
       next()


   } catch(error){
       res.status(400).json({ msg: error.message })
   }
}
