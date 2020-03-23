const router = require ('express').Router();

const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

//route here matches '/'
router.use('/', htmlRoutes)
//think of this as app as a separate instance of it, a middleware version app.use. Go to resources to see how this actually works.
//Two parameters, what routes you want to apply on and 

//prepends '/api' to the routes declared in the routes declared here '/'
// router.use('/api', apiRoutes)

module.exports = router;