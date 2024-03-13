const { model, Schema } = require('mongoose')


const commentSchema = new Schema ({
    user: {type: Schema.Types.ObjectId, ref:'User'},
    post: {type: Schema.Types.ObjectId, ref:'Post'},
    body: { type: String },
    likedBy: [{type: Schema.Types.ObjectId, ref:'User'}]
}, {
    timestamps: true
})

const Comment = model('Comment', commentSchema)

module.exports = Comment