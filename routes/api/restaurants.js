const express = require('express')
const router = express.Router()
const restaurantCtrl = require('../../controllers/api/restaurant')
const userCtrl = require('../../controllers/api/users')

// Index
router.get('/', userCtrl.auth, restaurantCtrl.index, restaurantCtrl.jsonRestaurants)

// Show
router.get('/:id', userCtrl.auth, restaurantCtrl.show, restaurantCtrl.jsonRestaurant)

router.post('/:id/favRestaurant', userCtrl.auth,restaurantCtrl.favRestaurants)

router.post('/:id/favRestaurantDelete', userCtrl.auth,restaurantCtrl.favRestaurantsDelete)

module.exports = router