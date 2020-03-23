const router = require('express').Router();
// This mini version of the app has /api/tables prepended to every route
const reserveController = require ('../../../controllers/reserveController')
//In case any route matches /

router.route('/')
.get(reserveController.getReserve)
//for post request we say  .post(reserveController.createReserve)
.post(reserveController.createReserve)
.delete(reserveController.deleteReserves)
module.exports = router;