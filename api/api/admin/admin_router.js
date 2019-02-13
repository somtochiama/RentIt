const router = require('express').Router();
const controller = require('./admin_controller');

router.post('/signup', controller.createAdmin)

router.post('/login', controller.loginUser, controller.authAdmin)

module.exports = router;