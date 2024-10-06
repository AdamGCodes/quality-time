//!--Requirements
const mongoose = require('mongoose')
const express = require('express');


//!--Router
const router = express.Router();

//!--Model
const Spark = require('../models/sparks.js');

//!--Middleware Functions


//!--Routes
//--Sparks Index Page
router.get('/', async (req, res) => {
    try{
        const allSparks = await Spark.find();
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
        console.log(req.body)
        const spark = await Spark.create(req.body)
        console.log(spark)
        return res.redirect('/sparks')
    } catch (error) {
        return res.status(500).send('<h1>Something went wrong</h1>')
    }
})

//--Sparks Show Page
router.get('/:sparkId', async (req, res, next) => {
    try {
        const spark = await Spark.findById(req.params.sparkId)
        if (!spark) return next()
        return res.render('sparks/show.ejs', { spark })
    } catch (error) {
        console.log(error)
        return res.status(500).send('<h1>Something went wrong</h1>')
    }
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