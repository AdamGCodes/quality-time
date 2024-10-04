//!--Requirements
const express = require('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv/config');

//!--Routers/Controllers
const sparksRouter = require('./controllers/sparks.js');


//!--Variables
const app = express()
const port = 3000

//!-- Middleware
app.use(morgan('dev'));
app.use(express.static('public')); //Check public folder on each request
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("+method"));

app.use('/sparks', sparksRouter);




//!--Routes
//-- Landing Page
app.get('/', (req, res) => {
    res.render('index.ejs')
});





//!--Server Connection
const startServers = async () => {
    try {
        //DB Connection
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database connected ✅')
        
        //Server Connection
        app.listen(port, () => {
            console.log(`🚀 Sever launched on port ${port} ✅`)
        })
    } catch (error){
        console.log(error)
    }
}

startServers()