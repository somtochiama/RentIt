const router = require('express').Router();
const controller = require('./contact_controller')

router.post('/post', controller.sendMessage)

module.exports = router