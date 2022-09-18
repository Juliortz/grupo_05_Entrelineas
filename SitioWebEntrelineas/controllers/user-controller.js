const express = require('express');
const app = express();


const userController = {
    register: (req, res)=> {
        res.render('users/register');
    },
    login: (req, res)=>{
        res.render('users/login');
    }
};

module.exports = userController;