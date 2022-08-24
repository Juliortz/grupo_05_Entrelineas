const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

router.get('/product/:id', productController.detail);
router.get('/product-cart', productController.cart)

module.exports = router;