const router       = require('express').Router(),
        adminRoute = require('./admin/admin_router'),
        subscriberRoute = require('./suscriber/suscriber_router')
        

/* router.use('/', (req, res) => {
    res.send("Testing")
}) */

router.use('/admin', adminRoute)
router.use('/subscribers', subscriberRoute)


        
module.exports = router;

