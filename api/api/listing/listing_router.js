const router = require('express').Router();
const controller = require('./listing_controller')

router.post('/post', controller.postListing)

router.get('/all', controller.getAllListing)

router.get('/one/:id', controller.getOneListing)

router.delete('/delete/:id', controller.deleteListing)

module.exports = router;