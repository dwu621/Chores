const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is landing page!'))

router.post('/user', controllers.createUser)

router.get('/user',controllers.getAllUsers)

router.get('/user/:id', controllers.getUserById)
// 
// router.get('/roller-coasters/:id', controllers.getRollerCoasterbyId)
// 
// router.put('/theme-parks/:id', controllers.updateThemePark)
// 
// router.put('/roller-coasters/:id', controllers.updateRollerCoaster)


module.exports = router