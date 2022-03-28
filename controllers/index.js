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

const createChore = async (req, res) => {
    try {
        const chore = await new Chore(req.body)
        await chore.save()
        return res.status(201).json({ chore })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const findAllChores = async (req, res) => {
    try {
        const chores = await Chore.find()
        return res.status(200).json({ chores })
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const createReward = async (req, res) => {
    try {
        const reward = await new Reward(req.body)
        await reward.save()
        return res.status(201).json({ reward })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const findAllRewards = async (req, res) => {
    try {
        const rewards = await Reward.find()
        return res.status(200).json({ rewards })
    } catch (err) {
        return res.status(500).send(err.message)
    }
}




module.exports = {
    createUser,
    findAllUsers,
    createChore,
    findAllChores,
    createReward,
    findAllRewards
}