const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Chore = new Schema (
    {
        name: { type: String, required: true },
        description: {type: String, required: true },
        pointsWorth: {type: String, required: true },
        isComplete: {type: Boolean, required: true}   
    },
    { timestamps: true }
)

module.exports = Chore
