const router = require('express').Router();
const controller = require('./review_controller')


router.get('/all', controller.getAllReviews)

router.post('/post', controller.postReview)


module.exports = router