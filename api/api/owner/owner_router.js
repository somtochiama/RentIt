const router = require('express').Router();
const controller = require('./owner_controller');

router.post('/post', controller.postOwner)


module.exports = router;