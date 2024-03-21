const { model, Schema } = require('mongoose')

const postSchema = new Schema ({
    title: { type: String, required: true },
    body: { type: String, required: false }, 
    pic: { type: String, required: false }, // picture of dish
    dish: { type: String, required: false }, // dish name
    rating: { type: Number, required: false }, 
    user: { type: Schema.Types.ObjectId, ref: 'User'}, 

    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' }, 
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], 
    likes: { type: Number, default: 0 },
    likedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }]

}, {
    timestamps: true
})

const Post = model('Post', postSchema)

module.exports = Post