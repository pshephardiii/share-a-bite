const express = require('express')
const router = express.Router()
const restaurantCtrl = require('../../controllers/api/restaurant')
const userCtrl = require('../../controllers/api/users')

router.get('/', userCtrl.auth, restaurantCtrl.index, restaurantCtrl.jsonRestaurants)

router.get('/all/:userId', restaurantCtrl.showUserFav, restaurantCtrl.jsonRestaurants)

router.get('/:id', userCtrl.auth, restaurantCtrl.show, restaurantCtrl.jsonRestaurant)

router.post('/:id/add', userCtrl.auth, restaurantCtrl.favRestaurants, restaurantCtrl.jsonRestaurant)

router.post('/:id/remove', userCtrl.auth, restaurantCtrl.favRestaurantsDelete, restaurantCtrl.jsonRestaurant)

module.exports = router