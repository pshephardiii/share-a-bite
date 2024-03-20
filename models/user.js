require('dotenv').config
const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: { type: String, required: true},
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minlenght: 3,
        required: true
    },
    contacts: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post'}],
    likedPosts: [{ type: Schema.Types.ObjectId, ref: 'Post'}],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
    favRestaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant'}]
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});

userSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({ _id: this._id, user: this }, process.env.SECRET)
    return token
}

const User = model('User', userSchema)

module.exports = User
