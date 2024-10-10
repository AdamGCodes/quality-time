//!--Requirements
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcryptjs');



//!--Router
const router = express.Router();

//!--Model
const User = require('../models/users.js');

//!--Middleware Functions
const isSignedIn = require('../middleware/is-signed-in.js');

//!-- Routes

//-- Create User Page
router.get('/sign-up', (req, res) => {
    res.render('auth/sign-up.ejs')
});

//-- Create User Route
router.post('/sign-up', async (req, res) =>{
    try{
        // Password match check
        if (req.body.password !== req.body.password2){
            return res.status(422).send('Password entries did not match')
        };
        // Hash password
        if(req.body.password){
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        }
        
        const userInDatabase = await User.findOne({ username: req.body.username});
        if (userInDatabase) {
            //This works but will need to make this a flash message redirecting to the signup form when I get to that stage.
            return res.send(`Username ${req.body.username} is already taken. Please use a different username.`)
        } else {
            const newUser = await User.create(req.body)

            //Create a session
            req.session.user = {
                username: newUser.username,
                _id: newUser._id
            }
            //Save sessions in the DB
            req.session.save((err) => {
            console.log(err)
            return res.redirect('/')
        });    
        };
    } catch (error) {
        console.log(error.errors)
        return res.status(500).render('auth/sign-up.ejs', {
            errors: error.errors,
            fieldValues: req.body
    }
)}})


//-- Sign In Page/Form
router.get("/sign-in", (req, res) => {
    res.render('auth/sign-in.ejs')
});

//-- Sign In Route
router.post('/sign-in', async (req, res) => {
try {
//Check if username exists
    const userInDatabase = await User.findOne({username: req.body.username })
//Error handling if no username found
    if (!userInDatabase) {
        console.log("Username not found in database.")
        return res.status(401).send('Login Unsuccessful, please check details and try again.')
    }
        const validPassword = bcrypt.compareSync(
            req.body.password,
            userInDatabase.password
        );
        if (!validPassword){
            return res.send('Login Unsuccessful, please check details and try again.')
        }
//Create the session
    req.session.user = {
        username: userInDatabase.username,
        _id: userInDatabase._id,
        email: userInDatabase.email,

    };
//Saving the session data in DB
    req.session.save((err)=> {
        console.log(err)
        return res.redirect('/')
});
    // return res.redirect("/");
}catch(error){
    return res.status(500).send('<h1>Something went wrong</h1>');
}
});

//-- Sign Out Route
router.get('/sign-out', (req, res) => {
    req.session.destroy((err) => {
        if (err){
            console.log(err)
            return res.status(500).send('<h1>Something went wrong</h1>');
        }
    });
        res.redirect("/")
})

//--Profile Page
router.get('/profile', isSignedIn, async (req, res, next) => {
    try {
        const userProfile = await User.findById(req.session.user._id).populate('myLikes').populate('mySparks');
        console.log(userProfile)
        return res.render('auth/profile.ejs', { userProfile })
    } catch(error) {
        console.log(error)
        return res.status(500).send('<h1>Something went wrong</h1>');
    }
    
})

//--Edit Profile Page
router.get('/profile/edit', isSignedIn, async (req, res) => {
    console.log("hit profile edit route")
    try {
        const user = req.session.user
        if(user){
            return res.render(`auth/edit-profile.ejs`)
        } else {
            return res.redirect('/sign-in')
        }
    }catch{

    }})
//     
//         const user = await User.findById(req.params.userId);
//         console.log(user)
//         if (!user) {
//             return res.redirect(`/auth/log-in`)
//         }
//         if (!user._id.equals(req.session.user._id)) {
//         return res.render(`auth/edit-profile.ejs`, { user })
//         }
//     } catch (error) {
//         console.log(error)
//         return res.status(500).send('<h1>Something went wrong</h1>')
//     }
// });

// //--Edit Profile Route
// router.put('/:sparkId', async (req, res) => {
//     try {
//         const spark = await Spark.findById(req.params.sparkId)
//         if (spark.creator.equals(req.session.user._id)) {
//             const updatedSpark = await Spark.findByIdAndUpdate(req.params.sparkId, req.body, { new: true });
//             req.session.message = "Great news! Your spark has been updated."
//             req.session.message = ('success', 'Action was succesful!');
//             req.session.save(() => {
//                 return res.redirect(`/sparks/${req.params.sparkId}`)
//             })
//         } else {
//             throw new Error('Only the creator of a spark can edit it.')
//         }
//     } catch (error) {
//         console.log(error)
//         return res.status(500).send('<h1>Something went wrong</h1>')
//     }
// });


//--! Export Router
module.exports = router