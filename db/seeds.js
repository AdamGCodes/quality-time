//!-- Imports
const mongoose = require('mongoose')
require('dontenv/config')

//!-- Models
const Spark = require('../models/sparks.js')
const User = require('../models/users.js')

//!-- Data
const sparkData = require('./data/sparks.js')
const userData = require('./data/users.js')

//!-- Run seeds
const runSeeds = async () => {
    try {
        //Connect to DB
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('🔒Database connection established✅')

        // CLear existing sparks
        const deletedSparks = await Spark.deleteMany()
        console.log(`🗑️${deletedSparks.deletedCount} sparks delted from the database`)
        // Clear existing users
        const deletedUsers = await User.deleteMany()
        console.log(`🗑️${deletedSparks.deletedCount} sparks delted from the database`)
    }   
}

//!--


//!--


//!--