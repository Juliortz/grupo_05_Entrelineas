const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

router.get('/product-detail/:id', productController.detail);
router.get('/product-cart', productController.cart)
router.get('/product-edition/:id', productController.editar);
router.get('/product-add', productController.add)

module.exports = router;