const express = require('express')
const router = express.Router()
const userController = require('../../controllers/api/users')

router.post('/', userController.createUser)
router.post('/login', userController.loginUser)
router.put('/:id', userController.auth, userController.updateUser)
router.get('/:id', userController.auth, userController.jsonUsers)
router.delete('/:id', userController.auth, userController.deleteUser)
router.post('/:id/add', userController.auth, userController.addUserContact)
router.post('/:id/delete', userController.auth, userController.deleteUserContact)
router.get('/:id/show', userController.show)

module.exports = router