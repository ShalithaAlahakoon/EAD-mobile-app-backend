const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.js');
const stationController = require('../controllers/stationController.js');


//get logins
router.route('/logins')
    .get(loginController.getAllLogins)
    .post(loginController.createLogin);

router.route('/stations')
    // .get(stationController.getAllStations)
    .post(stationController.createStation);

//export router
module.exports = router;
