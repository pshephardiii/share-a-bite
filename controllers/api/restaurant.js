const Restaurant = require('../../models/restaurant')



module.exports = {
    index,
    show,
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
        const restaurant = Restaurant.findOne(req.params.id)
        req.user.favRestaurants.push( restaurant._id)
        restaurant.likedBy.push(req.user._id)
        await req.user.save()
        next()
        res.status(200).json(req.user)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


async function favRestaurantsDelete(req, res, next) {
    try {
        const restaurant = Restaurant.findOne(req.params.id)
        const index = req.user.favRestaurants.indexOf({'_id': req.params.id })
        const index2 = restaurant.likedBy.indexOf(req.user.id )
        req.user.favRestaurants.splice(index, 1)
        restaurant.likedBy.splice(index2, 1)
        await req.user.save()
        next()
        res.status(200).json({msg: 'Deleted Restaurant From Favorite'})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}