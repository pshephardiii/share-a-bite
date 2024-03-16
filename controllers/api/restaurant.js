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
       req.user.restaurant.pull(req.params.id)
        req.user.favRestaurants.push( req.params.id)
        await req.user.save()
        next()
        res.status(200).json(req.user)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


async function favRestaurantsDelete(req, res, next) {
    try {
        await favRestaurants.indexOf({'_id': req.params.id })
        req.user.favRestaurants.splice(req.params.id)
        await req.user.save()
        next()
        res.status(200).json({msg: 'Deleted Restaurant From Favorite'})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}