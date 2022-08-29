const express = require('express');
const app = express();
const products = require('../data/productDataBase.json');

const productController = {
    detail: (req, res)=> {
    let productRequire = req.params.id;
    let productDetail = products.find((product)=>product.id == productRequire);
    res.render('product-detail', {productDetail});
    },
    cart: (req, res)=> {
        res.render('product-cart', {products});
    },
    editar: (req, res)=> {
        let idProduct = req.params.id;
        let productEdit = products.find((product)=> product.id == idProduct);
        res.render('product-edition', {productEdit});
    }
};

module.exports = productController;