//!--Requirements
const mongoose = require('mongoose')
const express = require('express');


//!--Router
const router = express.Router();

//!--Model
const sparks = require('../models/sparks.js');

//!--Middleware Functions


//!--Routes
//--Sparks Index Page
router.get('/', async (req, res) => {
    try{
        const allSparks = await sparks.find();
        return res.render('sparks/index.ejs', { allSparks })
    } catch (error){
        console.log(error)
        return res.status(500).send('<h1>Something went wrong</h1>')
    }
})

//--Sparks Create Page
router.get('/new', (req, res) => {
    res.render("sparks/new.ejs")
})

//--Sparks Create Route
router.post('/', async (req, res) => {
    try {
        const spark = await sparks.create(req,body)
        return res.redirect('/')
    } catch (error) {
        return res.status(500).send('<h1>Something went wrong</h1>')
    }
})

//--Sparks Show Page
router.get('/:sparkId', (req, res) => {
    res.send("<h1>Sparks Show Page ✅</h1>")
})


//--Sparks Update Page
router.get('/:sparkId/edit', (req, res) => {
    res.send("<h1>Sparks Index Page ✅</h1>")
})

//--Sparks Update Route
router.put('/:sparkId', (req, res) => {
    res.send("<h1>Sparks Update Route Test ✅</h1>")
})

//--Sparks Delete Route
router.delete('/:sparkId', (req, res) => {
    res.send("<h1>Sparks Delete Route Test ✅</h1>")
})



//--


//--


// Export Router
module.exports = router