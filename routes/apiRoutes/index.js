const router = require('express'). Router();
//we have one for /reserve and one for /tables
//this folder had /api prepended to everything

const tablesApi = require('./tablesApi');
const waitlistApi = require('./waitlistApi');


router.use('/tables', tablesApi);

router.use('/waitlist', waitlistApi);


module.exports = router;