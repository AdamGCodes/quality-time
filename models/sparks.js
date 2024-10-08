const mongoose = require('mongoose')


// const commentSchema = new mongoose.Schema({
//     comment: {type: String, required: true},
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// }, {timestaps: true}
// )

const tagSchema = new mongoose.Schema({

})

const sparkSchema = new mongoose.Schema({
    title: {type: String, required: true},
    resources: {type: String, required: true},
    description: { type: String, required: true },
    variations: { type: String},
    tags: [tagSchema],
    //comments: [commentSchema],
    creator: {
    type:mongoose.Schema.Types.ObjectId, 
    ref: 'User', required: true },
    

})

const spark = mongoose.model('spark', sparkSchema)

module.exports = spark