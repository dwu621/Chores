const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        userName: { type: String, required: true },
        password: { type: String, required: true },
        isParent: { type: Boolean, required: true },
        isChild: { type: Boolean, required: true },
        choresList: { type: Array, required: false },
        pointsEarned: { type: String, required: false }
    },
    { timestamps: true }
)

module.exports = User