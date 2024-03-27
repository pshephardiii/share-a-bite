const express = require('express')
const router = express.Router()
const postCtrl = require('../../controllers/api/posts')
const userCtrl = require('../../controllers/api/users')


router.get('/', postCtrl.index, postCtrl.jsonPosts)

router.delete('/:id', userCtrl.auth, postCtrl.destroy, postCtrl.jsonPost)

router.put('/:id', userCtrl.auth, postCtrl.update, postCtrl.jsonPost)

router.post('/', userCtrl.auth, postCtrl.create, postCtrl.jsonPost)

router.get('/all/:userId', postCtrl.showUserPosts, postCtrl.jsonPosts)

router.get('/:id', postCtrl.show, postCtrl.jsonPost)

router.post('/:id/like', userCtrl.auth, postCtrl.likePost, postCtrl.jsonPost)

router.post('/:id/unlike', userCtrl.auth, postCtrl.unlikePost, postCtrl.jsonPost)

module.exports = router