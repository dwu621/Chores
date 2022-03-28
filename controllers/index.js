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

module.exports = {
    createUser,
}