const Post = require('../../models/post')


module.exports = {
    create,
    index, 
    show,
    destroy, // auth
    update, // auth
    create, // auth
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
        const post = await Post.create(req.body) // post model params
        req.user.posts.addToSet(post)
        req.user.save()
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
        const posts = await Post.find({})
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