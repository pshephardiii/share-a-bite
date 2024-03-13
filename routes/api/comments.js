const express = require('express')
const router = express.Router()
const commentCtrl = require('../../controllers/comments')
const postCtrl = require('../../controllers/posts')
const userCtrl = require('../../controllers/users')
// const userCtrl = require('../../controllers/userCtrl')


router.get('/', commentCtrl.indexComments, commentCtrl.Jsoncomments)
router.get('/:id', commentCtrl.showComment, commentCtrl.Jsoncomment)


// need might need to go the Nicole's Post controller
//router.post('/', commentCtrl.createComment, commentCtrl.commentJson)
router.post(':postId/comment',userCtrl.auth, commentCtrl.createComment, commentCtrl.Jsoncomment)
router.put('/:id', userCtrl.auth,commentCtrl.updateComment, commentCtrl.Jsoncomment)
router.delete('/:id', userCtrl.auth, commentCtrl.deleteComment, commentCtrl.Jsoncomment)
router.post('/:id/like', userCtrl.auth, commentCtrl.likeComment, commentCtrl.Jsoncomment)
router.post('/:commentId/reply', userCtrl.auth, commentCtrl.replyComment, commentCtrl.Jsoncomment)
