const router = require('express').Router();
const controller = require('./suscriber_controller')


router.get('/all', controller.getAllSuscribers)

router.post('/post', controller.postSuscriber)


module.exports = router