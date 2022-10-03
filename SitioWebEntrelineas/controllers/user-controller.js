const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));



const userController = {
    register: (req, res)=> {
        res.render('users/register');
    },

    registerProcess: (req, res)=> {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
        let userFound = users.find(user => user.email === req.body.email);
        const resultValidation = validationResult(req);
            
            if (resultValidation.errors.length > 0){
                return res.render('users/register', {
                    errors : resultValidation.mapped(),
                    oldData : req.body
                })
            } else if (userFound) {
                return res.render('users/register', {
                    errors : {
                        email : {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData : req.body
                })
            } else {
                  
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
        return res.redirect ('../users/login');
    };
},

    login: (req, res)=>{
        res.render('users/login');
    },

    logVerification: (req, res)=>{
        const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        usuario = req.body.email;
        contrasenia = req.body.password;

        let userToLogin = users.find(user => user.email === usuario);
            if (userToLogin) {
                let isConstraseniaOk = bcrypt.compareSync(req.body.password, userToLogin.password);
                if (isConstraseniaOk) {
                    return res.send('Puedes ingresar');
                }
                return res.render('users/login', {
                    errors: {
                        email: {
                        msg:'Las credenciales son incorrectas'
                        }
                    },
                    oldData: req.body
                });
                
            }
            return res.render('users/login', {
                errors: {
                    email: {
                    msg:'Ud. no se encuentra registrado, por favor registrese'
                    }        
                }
            });



        // users.forEach(user => {
        //     if (user.email == usuario) {
        //         console.log('email correcto')
        //         datosUsuario = user;
        //         if (bcrypt.compareSync(contrasenia, user.password)) {
        //             res.render('/',{datosUsuario : datosUsuario});
        //             console.log('contraseña correcta')
        //         }else{
        //             res.render('users/login',{error: 'Contraseña invalida'})
        //         }
        //     }else{
        //         res.render('users/login',{error: 'Email invalido'})
        //     }
        // })        
    }
};

module.exports = userController;