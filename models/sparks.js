const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    comment: {type: String, required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true
})

const tagSchema = new mongoose.Schema({
    tag: [],
})

const sparkSchema = new mongoose.Schema({
    title: {type: String, required: ['Add a title', true]},
    resources: { type: String, required: ['Add a resources or state "none"', true] },
    description: { type: String, required: ['Add a description', true] },
    variations: { type: String},
    image: String,
    creator: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', required: true },
    comments: [commentSchema],
    tags: [tagSchema],
    likes: [{ type: mongoose.Types.ObjectId, ref: 'User' }]}, 
    { timestamps: true },
    
)



const spark = mongoose.model('spark', sparkSchema)

module.exports = spark