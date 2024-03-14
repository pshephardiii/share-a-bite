const express = require('express')
const router = express.Router()
const restaurantCtrl = require('../../controllers/api/restaurant')

// Index
router.get('/', restaurantCtrl.index, restaurantCtrl.jsonRestaurants)

// Show
router.get('/:id', restaurantCtrl.show, restaurantCtrl.jsonRestaurant)

module.exports = router