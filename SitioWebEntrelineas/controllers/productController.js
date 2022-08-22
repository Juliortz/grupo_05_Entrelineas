const express = require('express');
const app = express();
const products = require('../data/productDataBase.json');

const productController = {
    detail: (req, res)=> {
    let productRequire = req.params.id;
    let productDetail = products.find((product)=>product.id == productRequire);
    res.render('productDetail', {productDetail});
    }
};

module.exports = productController;