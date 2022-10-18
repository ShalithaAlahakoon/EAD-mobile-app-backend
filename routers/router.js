const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.js');


//get logins
router.route('/logins')
    .get(loginController.getAllLogins)
    .post(loginController.createLogin);



//export router
module.exports = router;
