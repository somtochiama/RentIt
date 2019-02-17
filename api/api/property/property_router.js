const router = require('express').Router();
const controller = require('./property_controller');
const auth = require('../auth')

router.get('/all',controller.getAllProperty)

router.post('/post',auth.validateToken, controller.postProperty)

router.delete('/delete/:id',auth.validateToken, controller.deleteProperty)

router.put('/update/:id', auth.validateToken, controller.updateProperty)

router.get('/apartment/:id',auth.validateToken, controller.getProperty)

router.get('/search', controller.searchProperty)


module.exports = router;