const express = require('express')
const router = express.Router()

const productController = require('../app/controller/ProductController')

// Thêm sản phẩm vào db
router.post('/store', productController.store)
router.get('/create', productController.create)


router.get('/:slug/:_id', productController.show)
router.put('/:_id/:slug', productController.cart)


module.exports = router