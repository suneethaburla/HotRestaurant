//creating another mini version of the app for my html routes
const router = require ('express').Router();

const htmlController = require ('./../../Controllers/htmlController');
//i can declare all of my routes here
//'/' prepended to all of these routes

//I can declare  .get or .post for just one route
//app.get('/', (req, res) => {}) but then I would have to create so many routes and is hard to maintain
router.route('/')
.get(htmlController.getHome);

router.route('/tables')
.get(htmlController.getTables);

router.route('/reserve')
.get(htmlController.getReserve);

//we will just export these

module.exports = router;
