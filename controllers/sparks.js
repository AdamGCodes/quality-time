//!--Requirements
const mongoose = require('mongoose')
const express = require('express');


//!--Router
const router = express.Router();

//!--Model
const Spark = require('../models/sparks.js');
const isSignedIn = require('../middleware/is-signed-in.js');

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

//--Profile Page
router.get('/profile', isSignedIn, async (req, res, next) => {
    res.render('sparks/profile.ejs')
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
router.get('/:sparkId/edit', async (req, res) => {
    const foundSpark = await Spark.findById(req.params.sparkId);
    res.render('sparks/edit.ejs', {
        spark: foundSpark,
    });
});

//--Sparks Update Route
//This is going to requier major update when tags come in to play possibly handle this with 
//a middleware function?
router.put('/:sparkId', async (req, res) => {
    await Spark.findByIdAndUpdate(req.params.sparkId, req.body);
    res.redirect(`/sparks/${req.params.sparkId}`)
});

//--Sparks Delete Route
router.delete('/:sparkId', async (req, res) => {
    await Spark.findByIdAndDelete(req.params.sparkId);
    res.redirect('/sparks');
});




//--


// Export Router
module.exports = router