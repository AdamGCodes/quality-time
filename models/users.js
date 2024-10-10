const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: ['A username is required', true]},
    email: { type: String, required: ['An e-mail is required', true]},
    password: { type: String, required: ['A password is required', true]}
})

const User = mongoose.model('User', userSchema)

module.exports = User
