const { model, Schema } = require('mongoose')

const restaurantSchema = new Schema ({
    name: { type: String, required: true },
    location: { type: String, required: true },
    menu: { type: String, required: true }, 
    featuredIn: { type: Schema.Types.ObjectId, ref: 'Post'}, 
    website: { type: String, required: true },
    likedBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

const Restaurant = model('Restaurant', restaurantSchema)

module.exports = Restaurant