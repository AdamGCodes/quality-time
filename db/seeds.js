//!-- Imports
const mongoose = require('mongoose')
require('dontenv/config')

//!-- Models
const Spark = require('../models/sparks.js')
const User = require('../models/users.js')

//!-- Data
const sparkData = require('./data/sparks.js')
const userData = require('./data/users.js')
const sparks = require('./data/sparks.js')

//!-- Run seeds
const runSeeds = async () => {
    try {
        //Connect to DB
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('🔒Database connection established✅')

        // CLear existing sparks
        const deletedSparks = await Spark.deleteMany()
        console.log(`🗑️${deletedSparks.deletedCount} sparks deleted from the database`)
        
        // Clear existing users
        const deletedUsers = await User.deleteMany()
        console.log(`🗑️${deletedUsers.deletedCount} users deleted from the database`)

        //Add new users
        const users = await User.create(userData)
        console.log(`${users.length} uses added to the database`)

       //Add new Sparks
       const sparks = await sparks.create() 
    } catch (error) {
        console.log(error)
    }//Incomplese need to pick this up when I've got more screen space and connection
}
runSeeds()