const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.js');
const stationController = require('../controllers/stationController.js');
const fuelCntroller = require('../controllers/fuelController');


//get logins
router.route('/logins')
    .get(loginController.getAllLogins)
    .post(loginController.createLogin);

router.route('/stations')
    // .get(stationController.getAllStations)
    .post(stationController.createStation)
    .get(stationController.getAllStations);
//fuelRoutes
router.route('/fuel')
    .post(fuelCntroller.addFuels);


//get areas
router.route('/stations/areas')
    .get(stationController.getAreas);

//get station names by area
router.route('/stations/names/:area')
    .get(stationController.getStationNamesByArea);

//get station by name
router.route('/stations/:name')
    .get(stationController.getStationByName);

//export router
module.exports = router;
