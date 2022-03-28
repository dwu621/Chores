const mongoose = require('mongoose')
const UserSchema = require('./user')
const ChoreSchema = require('./chore')
const RewardSchema = require('./reward')

const User = mongoose.model('User', UserSchema)
const Chore = mongoose.model('Chore', ChoreSchema)
const Reward = mongoose.model('Reward', RewardSchema)

module.exports = {
    User,
    Chore,
    Reward
}