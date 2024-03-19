require('dotenv').config()
require('./database')

const Restaurant = require('../models/restaurant')

function log() {
    console.log(Restaurant)
}



(async function() {

    await Restaurant.deleteMany({})
    const restaurants = await Restaurant.create([
        {name: `Paul's Tasty Food`, location: 'Las Vegas', menu: 'http://google.com', website: 'http://google.com'},
        {name: `Junfeng's Yummy Meals`, location: 'New York', menu: 'http://yahoo.com', menu: 'http://yahoo.com'},
        {name: `Nicole's Delicious Eatery`, location: `Los Angeles`, menu: 'http://politico.com', website: 'http://politico.com'},
        {name: `Rachail's Amazing Refreshments`, location: 'San Francisco', menu: 'http://youtube.com', website: 'http://youtube.com'},
        {name: `Omar's Kitchen of Sustenance`, location: 'unknown', menu: 'http://askjeeves.com', website: 'http://askjeeves.com'}
    ])

    console.log(restaurants)

    process.exit()

})()