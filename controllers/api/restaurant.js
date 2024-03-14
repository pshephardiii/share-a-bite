const Restaurant = require('../../models/restaurant')



module.exports = {
    index,
    show,
    jsonRestaurant,
    jsonRestaurants
}


function jsonRestaurant (_, res) {
    res.json(res.locals.data.resaurant)
}

function jsonRestaurants (_, res) {
    res.json(res.locals.data.resaurants)
}



/****** R - Read *****/

async function index(_, res ,next) {
    try {
        const restaurants = await Restaurant.find({ completed: true })
        res.locals.data.resaurants = restaurants
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


   /****** Show  *****/
async function show(req ,res,next) {
    try {
        const restaurant = await restaurant.findById(req.params.id)
        res.locals.data.restaurant = restaurant
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
