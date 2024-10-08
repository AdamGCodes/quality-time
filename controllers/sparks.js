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
router.get('/new', isSignedIn, (req, res) => {
    res.render("sparks/new.ejs")
})

//--Sparks Create Route
router.post('/', async (req, res) => {
    try {
        req.body.creator = req.session.user._id
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
        if (mongoose.Types.ObjectId.isValid(req.params.sparkId)) {
            const spark = await Spark.findById(req.params.sparkId).populate('creator')
            if (!spark) return next()
            return res.render('sparks/show.ejs', { spark })
        } else {
            next()
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send('<h1>Something went wrong</h1>')
    }
})

//--Sparks Update Page
router.get('/:sparkId/edit', isSignedIn, async  (req, res) => {
    try{
        if(mongoose.Types.ObjectId.isValid(req.params.sparkId)) {
            const foundSpark = await Spark.findById(req.params.sparkId);
            if (!foundSpark) return next()
            if(!foundSpark.creator.equals(req.session.user._id)){
                return res.redirect(`/sparks/${req.params.sparkId}`)
            }
        return res.render(`sparks/edit.ejs`, {foundSpark})
    } next()
    } catch (error) {
        console.log (error)
        return res.status(500).send('<h1>Something went wrong</h1>')
    };
});

//--Sparks Update Route
//This is going to requier major update when tags come in to play possibly handle this with 
//a middleware function?
router.put('/:sparkId', async (req, res) => {
    try {
        const sparkToUpdate = await Spark.findById(reqparams.sparkId)
        if(sparkToUpdate.creator.equals(req.session.user._id)) {
            const updatedSpark = await Spark.findByIdAndUpdate(req.params.sparkId, req.body, {new: true});
            res.redirect(`/sparks/${req.params.sparkId}`)
        }
        throw new Error('Only the the creator of a spark can edit it.')
    } catch (error) {
        console.log(error)
        return res.status(500).send('<h1>Something went wrong</h1>')
    }
});

//--Sparks Delete Route
router.delete('/:sparkId', isSignedIn, async (req, res) => {
    await Spark.findByIdAndDelete(req.params.sparkId);
    res.redirect('/sparks');
});

//--Comments
//Create Comments
router.post('/:sparkId/comments', async (req, res)=> {
    try {
        req.body.user = req.session.user._id
        const spark = await Spark.findById(req.params.sparkId)
        if (!spark) return next()
        spark.comments.push(req.body)
        await spark.save()
        
        return res.redirect(`/sparks/${req.params.sparkId}`)
    } catch (error) {
        console.log(error)
        return res.status(500).send('<h1>Something went wrong</h1>')
    }
})

//Delete Comments
router.delete('/:sparkId/comments/:commentId', async (req, res) => {

})

// Export Router
module.exports = router