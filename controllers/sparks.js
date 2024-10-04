//!--Requirements
const mongoose = require('mongoose')
const express = require('express');


//!--Router
const router = express.Router();

//!--Model
const sparks = require('../models/sparks.js')

//!--Middleware Functions


//!--Routes
//--Sparks Index Page
router.get('/', (req, res) => {
    res.send("<h1>Sparks Index Page ✅</h1>")
})

//--Sparks Create Page
router.get('/new', (req, res) => {
    res.send("<h1>Sparks Create Page ✅</h1>")
})

//--Sparks Create Route
router.post('/', (req, res) => {
    res.send("<h1>Sparks Create Route Test ✅</h1>")
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