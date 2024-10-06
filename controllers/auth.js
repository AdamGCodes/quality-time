//!--Requirements
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcryptjs')


//!--Router
const router = express.Router();

//!--Model
const User = require('../models/users.js');

//!--Middleware Functions


//!-- Routes

//-- Create User Page
router.get('/sign-up', (req, res) => {
    res.render('auth/sign-up.ejs')
})

//-- Create User Route
router.post('/sign-up', async (req, res) =>{
    try{
        // Password match check
        if (req.body.password !== req.body.password2){
            return res.status(422).send('Password entries did not match')
        }
        // Hash password
        req.body.password = bcrypt.hashSync(req.body.password, 10)

        const newUser = await User.create(req.body)
        return res.redirect('/')
    } catch (error) {
        if (error.code === 11000) {
            const unique = Object.entries(error.keyValue)[0]
            return res.status(422).send(`${unique[0]} "${unique[1]}" is not available, please try a different ${unique[0] }`)
        }
        return res.status(500).send('<h1>Something went wrong</h1>')
    }
})


//-- Sign In Page/Form

//-- Sign In Route

//-- Sign Out Route

//--

//--


//--! Export Router
module.exports = router