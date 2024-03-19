const { model, Schema } = require('mongoose')

const restaurantSchema = new Schema ({
    name: { type: String, required: true },
    location: { type: String, required: false },
    menu: { type: String, required: false }, 
    featuredIn: [{ type: Schema.Types.ObjectId, ref: 'Post' }], 
    website: { type: String, required: false },
    likedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    timestamps: true
})

const log = function log(){
    console.log(Restaurant)
}

const Restaurant = model('Restaurant', restaurantSchema)

module.exports = Restaurant