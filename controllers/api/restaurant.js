const Restaurant = require('../../models/restaurant')



module.exports = {
    index,
    show,
    jsonResaurant,
    jsonResaurants
}


function jsonResaurant (_, res) {
    res.json(res.locals.data.resaurant)
}

function jsonResaurants (_, res) {
    res.json(res.locals.data.resaurants)
}



/****** R - Read *****/

async function index(_, res ,next) {
    try {
        const resaurants = await Restaurant.find({ completed: true })
        res.locals.data.resaurants = resaurants
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


   /****** Show  *****/
async function show(req ,res,next) {
    try {
        const resaurant = await resaurant.findById(req.params.id)
        res.locals.data.resaurant = resaurant
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
