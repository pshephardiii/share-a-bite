const express = require('express')
const router = express.Router()
const commentCtrl = require('../../controllers/api/comments')
const userCtrl = require('../../controllers/api/users')

router.get('/', commentCtrl.indexComments, commentCtrl.jsonComments) // indexComments
router.get('/:id', commentCtrl.showComment, commentCtrl.jsonComment) // show comment

router.post('/:postId/comment', userCtrl.auth, commentCtrl.createComment, commentCtrl.jsonComment) //create a comment
router.put('/:id', userCtrl.auth,commentCtrl.updateComment, commentCtrl.jsonComment) // update the comment
router.delete('/:id', userCtrl.auth, commentCtrl.deleteComment, commentCtrl.jsonComment) // delete the comment
router.post('/:id/like', userCtrl.auth, commentCtrl.likeComment, commentCtrl.jsonComment) // like the comment
router.post('/:id/unlike', userCtrl.auth, commentCtrl.unlikeComment, commentCtrl.jsonComment) // like the comment
router.post('/:commentId/reply', userCtrl.auth, commentCtrl.replyComment, commentCtrl.jsonComment) // reply to the comment

module.exports = router