const express = require('express')
const router = express.Router()
const restaurantCtrl = require('../../controllers/api/restaurant')

// Index
router.get('/', restaurantCtrl.index, restaurantCtrl.jsonResaurants)

// Show
router.get('/:id', restaurantCtrl.show, restaurantCtrl.jsonResaurant)

module.exports = router