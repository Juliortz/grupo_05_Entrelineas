const express = require('express');
const app = express();
const products = require('../data/productDataBase.json');

const controller = {
    index: (req, res)=> {
        res.render('index', {products})
    }
}
module.exports = controller;