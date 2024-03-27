const Post = require('../../models/post')
const User = require('../../models/user')
const Restaurant = require('../../models/restaurant')


module.exports = {
    create,
    index, 
    show,
    showUserPosts,
    destroy, // auth
    update, // auth
    create, // auth
    likePost, // auth
    unlikePost, // auth
    getFeaturedRestaurant,
    jsonPosts,
    jsonPost
}

// jsonPosts jsonPost
// viewControllers

function jsonPost (_, res) {
    res.json(res.locals.data.post)
}

function jsonPosts (_, res) {
    res.json(res.locals.data.posts)
}

/******* C - Create *******/

async function create(req, res, next) {
    try {
        req.body.user = req.user._id
        
        const userId = req.user._id

        const postUser = await User.findById(userId)

        const post = await Post.create(req.body)

        postUser.posts.addToSet(post._id)
        
        await postUser.save()
        if(post.restaurant) {
            const postRest = await Restaurant.findById(post.restaurant)
            postRest.featuredIn.push(post._id)
            await postRest.save()
        }
        res.locals.data.post = post
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/******* R - Read *******/

/* read/get ALL posts */

async function index(_, res, next) {
    try {
        const posts = await Post.find({}).populate('restaurant').populate('user').populate('comments')
        res.locals.data.posts = posts
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function showUserPosts(req, res, next) {
    try {
        const posts = await Post.find({ user: req.params.userId })
        res.locals.data.posts = posts
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/* read/show ONE post */

async function show(req, res, next) {
    try {
        const post = await Post.findById(req.params.id)
        res.locals.data.post = post
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/******* U - Update *******/

async function update(req, res, next) {
    try {
        const post = await Post.findOneAndUpdate({ _id : req.params.id, user: req.user._id }, req.body, { new: true })
        res.locals.data.post = post
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/******* D - Destroy *******/

async function destroy(req, res, next){
    try {
        const post = await Post.findOneAndDelete({ _id : req.params.id, user: req.user.id })
        req.user.posts.pull(post)
        req.user.save()
        res.locals.data.post = Post
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// Like a Post

async function likePost(req, res, next) {
    try {
        const userId = req.user._id
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).json({ msg: error.message })
        }

        if (req.user.likedPosts.includes(post._id)) {
            throw new Error('Post was already liked.')
        }

        req.user.likedPosts.addToSet(post._id)
        await req.user.save()

        post.likedBy.addToSet(userId)
        post.likes = post.likes + 1
        await post.save()

        res.locals.data.post = post
        next()

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// Unlike a Post

async function unlikePost(req, res, next) {
    try {
        const userId = req.user._id
        const postId = req.params.id
        
        const post = await Post.findById(postId)
        
        if (!post) {
            return res.status(404).json({ message: 'Post not found' })
        }
        
        const likedIndex = req.user.likedPosts.indexOf(postId)
        if (likedIndex === -1) {
            throw new Error('Post not liked by the user')
        }
        
        req.user.likedPosts.splice(likedIndex, 1)
        await req.user.save()
        
        const userIndex = post.likedBy.indexOf(userId)
        if (userIndex !== -1) {
            post.likedBy.splice(userIndex, 1)
            post.likes = post.likes -1
            await post.save()
        }
        
        res.locals.data.post = post
        next()

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// Get posts that reference the same restaurant

async function getFeaturedRestaurant(req, res, next) {
    try {
        const restaurantId = req.params.restaurant._id
        const posts = await Post.find({ restaurant: restaurantId }).populate('user')
        res.json(posts)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}