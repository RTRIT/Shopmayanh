const express = require('express')
const router = express.Router()

const validateController = require('../app/controller/ValidateController')

// login page
router.get('/login', validateController.showLogin);
router.post('/login', validateController.login);

//Register page
router.get('/register', validateController.showRegister);
router.post('/register', validateController.register);

//

module.exports = router