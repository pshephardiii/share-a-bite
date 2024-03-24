require('dotenv').config()
const database = require('./database')

const Restaurant = require('../models/restaurant')
const User = require('../models/user')
const Post = require ('../models/post')


function log() {
    console.log(Restaurant)
}



(async function() {

    await Restaurant.deleteMany({})
    const restaurants = await Restaurant.create([
        {name: `Paul's Tasty Food`, location: 'Las Vegas', menu: 'http://google.com', website: 'http://google.com'},
        {name: `Junfeng's Yummy Meals`, location: 'New York', menu: 'http://yahoo.com', website: 'http://yahoo.com'},
        {name: `Nicole's Delicious Eatery`, location: `Los Angeles`, menu: 'http://politico.com', website: 'http://politico.com'},
        {name: `Rachail's Amazing Refreshments`, location: 'San Francisco', menu: 'http://youtube.com', website: 'http://youtube.com'},
        {name: `Omar's Kitchen of Sustenance`, location: 'unknown', menu: 'http://askjeeves.com', website: 'http://askjeeves.com'}
    ])

    await User.deleteMany({})
    const users = await User.create([
        {name: "Paul", email: "paul@paul.com", password: "paul", posts: []},
        {name: "Junfeng", email: "junfeng@junfeng.com", password: "junfeng", posts: []},
        {name: "Nicole", email: "nicole@nicole.com", password: "nicole", posts: []},
        {name: "Rachail", email: "rachail@rachail.com", password: "rachail", posts: []},
        {name: "Omar", email: "omar@omar.com", password: "omar", posts: []}
    ])

    await Post.deleteMany({})
    const posts = await Post.create([
        {title: "Good food!", body: "wow what fantastic chicken! I can't believe it!", rating: 5, dish: "chicken", restaurant: restaurants[2], user: users[0]},
        {title: "Pretty good!", body: "it was good, but the presentation leaves a lot to be desired", rating: 3, dish: "beef", restaurant: restaurants[0], user: users[1]},
        {title: "Outstanding!", body: "I had an out of body experience with this fish... it was a little scary", rating: 4, dish: "fish", restaurant: restaurants[1], user: users[2]},
        {title: "Ehhh", body: "Was this pasta even cooked?", rating: 2, dish: "pasta", restaurant: restaurants[4], user: users[3]},
        {title: "FOOD!", body: "I ordered a burger", rating: 1, dish: "lobster", restaurant: restaurants[3], user: users[4]}
    ])

    await User.findOneAndUpdate({name: "Paul"}, {posts: posts[0]}, {new: true})
    await User.findOneAndUpdate({name: "Junfeng"}, {posts: posts[1]}, {new: true})
    await User.findOneAndUpdate({name: "Nicole"}, {posts: posts[2]}, {new: true})
    await User.findOneAndUpdate({name: "Rachail"}, {posts: posts[3]}, {new: true})
    await User.findOneAndUpdate({name: "Omar"}, {posts: posts[4]}, {new: true})

    console.log(restaurants)
    console.log(users)
    console.log(posts)

    process.exit()

})()