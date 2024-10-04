const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    comment: {type: String, required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {timestaps: true}
)

const tagSchema = new mongoose.Schema({

})

const sparksSchema = new mongoose.Schema({
    title: {type: String, required: true},
    resources: {type: String, required: true},
    description: { type: String, required: true },
    variations: { type: String},
    comment: [commentSchema],
    user: {type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tag: [tagSchema]

})

const spark = mongoose.model('sparks', sparksSchema)

module.exports = spark