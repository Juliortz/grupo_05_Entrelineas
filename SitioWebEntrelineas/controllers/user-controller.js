const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));



const userController = {
    register: (req, res)=> {
        res.render('users/register');
    },

    registerProsses: (req, res)=> {
        
            const resultValidation = validationResult(req)
            
            if (resultValidation.errors.length > 0){
                    res.render('users/register', {
                    errors : resultValidation.mapped(),
                    oldData : req.body
                })
            } else {
                
        const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"))
              
        const newUser = {
            id: Date.now(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            user: req.body.user,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,10),
            country: req.body.country,
            genlit: req.body.genlit,
            avatar: req.file.filename,
            };

        users.push(newUser);
        const data = JSON.stringify(users, null, " ");
        fs.writeFileSync(usersFilePath, data);
        res.send('¡Usted se ha registrado exitosamente!');
    };
},

    login: (req, res)=>{
        res.render('users/login');
    }
};

module.exports = userController;