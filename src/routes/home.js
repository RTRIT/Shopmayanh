const express = require('express')
const router = express.Router()

const homeController = require('../app/controller/HomeController')

router.get('/', homeController.index)
// router.post('/register', homeController.register)
router.put('/:_id', homeController.cart)
// router.get('/:slug', homeController.show)
router.get('/sort_by/:slug', homeController.sort)



module.exports = router