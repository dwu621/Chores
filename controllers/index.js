const res = require('express/lib/response')
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

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({ users })
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if (user) {
            return res.status(200).json({ user })
        }
        return res.status(400).send('User with the specified id does not exist.')
    } catch (err) {
        return res.status(500).send(err.message)
    }
} 

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, req.body, { new: true})
            if (!user) {
                res.status(500).send('User not found')
            }
            return res.status(200).json(user)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('User deleted')
        }
        throw new Error('User not found!')
    }
    catch (err) {
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
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createChore,
    findAllChores,
    createReward,
    findAllRewards
}