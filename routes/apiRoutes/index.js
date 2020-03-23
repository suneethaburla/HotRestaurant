const router = require('express'). Router();
//we have one for /reserve and one for /tables
//this folder had /api prepended to everything

const db = require('./../../models')

const tablesApi = require('./tablesApi');
const waitlistApi = require('./waitlistApi');


router.use('/tables', tablesApi);

router.use('/waitlist', waitlistApi);

//when you clear the tables, it will delete everything in the array

router.route ('/clear')
.get((req, res) => {
db.Reserve.length = 0;
db.Waitlist.length = 0;
res.send("cleared")
})


module.exports = router;