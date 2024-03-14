const express = require('express')
const router = express.Router()
const commentCtrl = require('../../controllers/comments')
const userCtrl = require('../../controllers/users')


router.get('/', commentCtrl.indexComments, commentCtrl.Jsoncomments) // indexComments
router.get('/:id', commentCtrl.showComment, commentCtrl.Jsoncomment) // show comment


// the create a comment route might need to be moved to the Nicole's Post route
router.post(':postId/comment',userCtrl.auth, commentCtrl.createComment, commentCtrl.Jsoncomment) //create a comment
router.put('/:id', userCtrl.auth,commentCtrl.updateComment, commentCtrl.Jsoncomment) // update the comment
router.delete('/:id', userCtrl.auth, commentCtrl.deleteComment, commentCtrl.Jsoncomment) // delete the comment
router.post('/:id/like', userCtrl.auth, commentCtrl.likeComment, commentCtrl.Jsoncomment) // like the comment
router.post('/:commentId/reply', userCtrl.auth, commentCtrl.replyComment, commentCtrl.Jsoncomment) // reply to the comment
