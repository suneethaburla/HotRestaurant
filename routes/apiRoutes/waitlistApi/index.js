const router = require('express').Router();

//'/api/waitlist' prepended to every route that's here
const waitlistController = require ('../../../controllers/waitlistController')


router.route ('/')
.get(waitlistController.getWaitlist)
module.exports = router;
