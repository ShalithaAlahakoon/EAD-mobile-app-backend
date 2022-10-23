const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.js');
const fuelCntroller = require('../controllers/fuelController');


//get logins
router.route('/logins')
    .get(loginController.getAllLogins)
    .post(loginController.createLogin);

//fuelRoutes
router.route('/fuel')
    .post(fuelCntroller.addFuels);



//export router
module.exports = router;
