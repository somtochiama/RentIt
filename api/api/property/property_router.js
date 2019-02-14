const router = require('express').Router();
const controller = require('./property_controller')

router.get('/all',controller.getAllProperty)

router.post('/post', controller.postProperty)

router.delete('/delete/:id', controller.deleteProperty)

router.put('/update/:id', controller.updateProperty)

router.get('/:id', controller.getProperty)


module.exports = router;