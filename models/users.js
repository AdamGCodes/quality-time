const mongoose = require('mongoose')




const userSchema = new mongoose.Schema({
    username: { type: String, required: ['A username is required', true]},
    email: { type: String, required: ['An e-mail is required', true]},
    password: { type: String, required: ['A password is required', true]}
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})


//!-- Virtual Schemas

//My likes
userSchema.virtual('myLikes', {
    ref: 'spark',
    localField: '_id',
    foreignField: 'likes'
})

//My sparks
userSchema.virtual('mySparks', {
    ref: 'spark',
    localField: '_id',
    foreignField: 'creator'
})

const User = mongoose.model('User', userSchema)

module.exports = User
