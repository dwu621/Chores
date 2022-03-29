const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is landing page!'))


router.post('/user', controllers.createUser)

router.get('/user', controllers.getAllUsers)

router.get('/user/:id', controllers.getUserById)

router.put('/user/:id', controllers.updateUser)

router.delete('/user/:id', controllers.deleteUser)


router.post('/chore', controllers.createChore)

router.get('/chore', controllers.getAllChores)

router.get('/chore/:id', controllers.getChoreById)

router.put('/chore/:id', controllers.updateChore)

router.delete('/chore/:id', controllers.deleteChore)


router.post('/reward', controllers.createReward)

router.get('/reward', controllers.getAllRewards)

router.get('/reward/:id', controllers.getRewardById)

router.put('/reward/:id', controllers.updateReward)

router.delete('/reward/:id', controllers.deleteReward)

module.exports = router