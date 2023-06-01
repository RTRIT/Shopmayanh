const express = require('express')
const router = express.Router()

const adminController = require('../app/controller/AdminController')

router.get('/user-mag', adminController.showUser)

module.exports = router