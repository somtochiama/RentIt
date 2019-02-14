const router       = require('express').Router(),
        adminRoute = require('./admin/admin_router'),
        subscriberRoute = require('./suscriber/suscriber_router'),
        reviewRoute = require('./review/review_router'),
        ownerRoute = require('./owner/owner_router'),
        propertyRoute = require('./property/property_router')

/* router.use('/', (req, res) => {
    res.send("Testing")
}) */

router.use('/admin', adminRoute)
router.use('/subscribers', subscriberRoute)
router.use('/review', reviewRoute)
router.use('/owner', ownerRoute)
router.use('/property', propertyRoute)


        
module.exports = router;

