const Restaurant = require('../../models/restaurant')
const User = require('../../models/user')

module.exports = {
    index,
    show,
    showUserFav,
    favRestaurants,
    favRestaurantsDelete,
    jsonRestaurant,
    jsonRestaurants
}


function jsonRestaurant (_, res) {
    res.json(res.locals.data.restaurant)
}

function jsonRestaurants (_, res) {
    res.json(res.locals.data.restaurants)
}

/****** R - Read *****/

async function index(_, res ,next) {
    try {
        const restaurants = await Restaurant.find({})
        res.locals.data.restaurants = restaurants
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function showUserFav(req, res, next) {
    try {
        const restaurants = await Restaurant.find({ user: req.params.userId})
        res.locals.data.restaurants = restaurants
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


   /****** Show  *****/
async function show(req ,res,next) {
    try {
        const restaurant = await Restaurant.findById(req.params.id)
        res.locals.data.restaurant = restaurant
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


 async function favRestaurants (req, res, next) {
    try {
        const restaurant = await Restaurant.findById(req.params.id)
        const user = await User.findById(req.user._id)
        user.favRestaurants.addToSet(restaurant._id)
        restaurant.likedBy.addToSet(user._id)
        await user.save()
        await restaurant.save()
        res.locals.data.restaurant = restaurant
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

async function favRestaurantsDelete(req, res, next) {
    try {
        const restaurant = await Restaurant.findById(req.params.id)
        const user = await User.findById(req.user._id)
        const index = user.favRestaurants.indexOf(restaurant._id)
        const index2 = restaurant.likedBy.indexOf(user._id )
        user.favRestaurants.splice(index, 1)
        restaurant.likedBy.splice(index2, 1)
        await user.save()
        await restaurant.save()
        res.locals.data.restaurant = restaurant
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}