const express = require('express')
const router = express.Router()
const postCtrl = require('../../controllers/api/posts')
const userCtrl = require('../../controllers/api/users')

// Index GET /posts
router.get('/', postCtrl.index, postCtrl.jsonBlogs)
// Delete DELETE /posts/:id
router.delete('/:id', userCtrl.auth, postCtrl.destroy, postCtrl.jsonBlog)
// Update PUT /posts/:id
router.put('/:id', userCtrl.auth, blogCtrl.update, postCtrl.jsonBlog)
// Create GET /posts
router.post('/', userCtrl.auth, postCtrl.create, postCtrl.jsonBlog)
// Show GET /posts/:id
router.get('/:id', postCtrl.show, postCtrl.jsonBlog)

module.exports = router