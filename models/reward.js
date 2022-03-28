const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Reward = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true},
        pointsRedeem: { type: String, required: true }
    }
)

module.exports = Reward