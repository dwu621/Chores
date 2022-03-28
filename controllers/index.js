const { User, Chore, Reward } = require('../models')

const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({ user })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const findAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({ users })
    } catch (err) {
        return res.status(500).send(err.message)
    }
}


module.exports = {
    createUser,
    findAllUsers
}