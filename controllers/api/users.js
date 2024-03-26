require('dotenv').config
const User = require('../../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.auth = async (req, res, next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, process.env.SECRET)
        console.log(data)
        const user = await User.findOne({_id: data._id })
        if(!user){ 
            throw new Error('User not found') 
        }
        req.user = user
        next()
    }catch(error){
        res.status(401).json ({ message: error.message })
    }
}

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.json(token)
    } catch (error) {
        res.status(400).json({ message: error.messege })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if(!user || !await bcrypt.compare(req.body.password, user.password)){
            throw new Error('User Not Found')
        } else {
            const token = await user.generateAuthToken()
            res.json({ user, token })
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        // delete the __v so the user can update the user
        delete req.body.__v;
        const updates = Object.keys(req.body)
        updates.forEach(update => req.user[update] = req.body[update])
        await req.user.save()
        res.json(req.user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.userIndex = async (_, res ,next) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)

        // next()
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.contactsIndex = async (req, res ,next) => {
    try {
        const user = await User.findById(req.user._id).populate('contacts')
        const users =user.contacts
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.contactsIdIndex = async (req, res ,next) => {
    try {
        const user = await User.findById(req.user._id)
        const users =user.contacts
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await req.user.deleteOne()
        res.status(200).json({ message: 'User Deleted' })
      }catch(error){
        res.status(400).json({message: error.message})
      }
    }

exports.addUserContact = async (req,res) => {
    try {
        // if(req.user.contacts.includes(req.params.id)){
        //     throw new Error('contact was already added.')}
           
        const newUser = await User.findById(req.params.id)
        req.user.contacts.addToSet(newUser._id)
        newUser.contacts.addToSet(req.user._id)
        await req.user.save()
        await newUser.save()
        res.status(200).json({ message: 'Contact added' })
         
    }catch(error){
        res.status(400).json({ message: error.message })
    }
}

exports.deleteUserContact = async (req,res) => {
    try {
        if(!req.user.contacts.includes(req.params.id)){
            throw new Error('contact is not added.')
        } 
            const newUser = await User.findById(req.params.id)
            const index = req.user.contacts.indexOf(newUser._id )
            const index2 = newUser.contacts.indexOf(req.user._id)
            req.user.contacts.splice(index, 1)
            newUser.contacts.splice(index2, 1)
            await req.user.save()
            await newUser.save()
            res.status(200).json({ message: 'Contact Deleted' })
             
    }catch(error){
        res.status(400).json({ message: error.message })
    }
}


exports.show = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id }).populate('posts')
       
        res.json({ user })
    } catch (error) {
     res.status(400).json({ message: error.message })
    }
}
