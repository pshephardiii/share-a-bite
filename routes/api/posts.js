const express = require('express')
const router = express.Router()
const postCtrl = require('../../controllers/api/posts')
const userCtrl = require('../../controllers/api/users')

// Index GET /posts
router.get('/', postCtrl.index, postCtrl.jsonPosts)
// Delete DELETE /posts/:id
router.delete('/:id', userCtrl.auth, postCtrl.destroy, postCtrl.jsonPost)
// Update PUT /posts/:id
router.put('/:id', userCtrl.auth, postCtrl.update, postCtrl.jsonPost)
// Create GET /posts
router.post('/', userCtrl.auth, postCtrl.create, postCtrl.jsonPost)
// Show GET /posts/:id
router.get('/:id', postCtrl.show, postCtrl.jsonPost)

// Liked by
router.post('/:id/likes', userCtrl.auth, postCtrl.likePost, postCtrl.jsonPost)

// UN-liked
router.delete('/:id/likes', userCtrl.auth, postCtrl.unlikePost, postCtrl.jsonPost)

// Favorited restaurants
router.get('/:id/restaurants', userCtrl.auth, postCtrl.getFeaturedRestaurant, postCtrl.jsonPost)

// UN-Favorited restaurants
router.delete('/:id/restaurants', userCtrl.auth, postCtrl.unFavoriteRestuarant, postCtrl.jsonPost)

module.exports = router