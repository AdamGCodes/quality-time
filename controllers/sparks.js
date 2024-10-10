//!--Requirements
const mongoose = require('mongoose')
const express = require('express');


//!--Router
const router = express.Router();

//!--Model
const Spark = require('../models/sparks.js');
const isSignedIn = require('../middleware/is-signed-in.js');
const spark = require('../models/sparks.js');

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
        req.session.message = "Great news! Your spark has been published."
        req.session.save(() => {
            return res.redirect(`/sparks`)
        })
    } catch (error) {
        console.log(error.errors)
        return res.status(500).render('sparks/new.ejs', { 
            errors: error.errors,
            fieldValues: req.body
        })
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
            const spark = await Spark.findById(req.params.sparkId).populate('creator').populate('comments.user')
            console.log(spark)
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
            const spark = await Spark.findById(req.params.sparkId);
            if (!spark) return next()
            if(!spark.creator.equals(req.session.user._id)){
                return res.redirect(`/sparks/${req.params.sparkId}`)
            }
        return res.render(`sparks/edit.ejs`, {spark})
    } next()
    } catch (error) {
        console.log(error)
        return res.status(500).send('<h1>Something went wrong</h1>')
    }
});


//--Sparks Update Route
//This is going to requier major update when tags come in to play possibly handle this with 
//a middleware function?
router.put('/:sparkId', async (req, res) => {
    try {
        const spark = await Spark.findById(req.params.sparkId)
        if(spark.creator.equals(req.session.user._id)) {
            const updatedSpark = await Spark.findByIdAndUpdate(req.params.sparkId, req.body, {new: true});
            req.session.message = "Great news! Your spark has been updated."
            req.session.save(() => {
                return res.redirect(`/sparks/${req.params.sparkId}`)
        })
        } else {
            throw new Error('Only the creator of a spark can edit it.')
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send('<h1>Something went wrong</h1>')
    }
});


//--Sparks Delete Route
router.delete('/:sparkId', isSignedIn, async (req, res) => {
    await Spark.findByIdAndDelete(req.params.sparkId);
    req.session.message = "Your spark has been deleted."
    req.session.save(() => {
        return res.redirect('/sparks')
});
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
        req.session.message = "Your comment was NOT posted, please try again."
        req.session.save(() => {
            return res.redirect(`/sparks/${req.params.sparkId}`)
        })
    }
})

//Delete Comments
router.delete('/:sparkId/comments/:commentId', isSignedIn, async (req, res) => {
    try{
        const spark = await Spark.findById(req.params.sparkId)
        if(!spark) return next()
        
        const commentToDelete = spark.comments.id(req.params.commentId)
        if (! commentToDelete) return next()
        
        if (!commentToDelete.user.equals(req.session.user._id))
            throw new Error('Only the author of a comment can delete it.')

        commentToDelete.deleteOne()
        await spark.save()
        req.session.message = "Your comment was successfully deleted."
        req.session.save(() => {
            return res.redirect(`/sparks/${req.params.sparkId}`)
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send('<h1>Something went wrong</h1>')
    }
})

// Export Router
module.exports = router