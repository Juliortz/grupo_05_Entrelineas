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
        //pregunto si existe el usuario a loguearse
            if (userToLogin) {
                let isConstraseniaOk = bcrypt.compareSync(req.body.password, userToLogin.password);
                // si existe el usuario, pregunto si coincide con la contraseña
                    if (isConstraseniaOk) {
                        //con el delete borro la contraseña para que no quede guardada en la session por seguridad
                        delete userToLogin.password;
                        //le asigno al req.session (el userLogged es una propiedad del session) los datos del usuario que se está logueando
                        req.session.userLogged = userToLogin
                        //el req.session.userLogged queda disponible para todas las vistas
                    return res.redirect('/users/profile');
                }
                // si la contraseña es incorrecta, vuelvo al formulario y mando ese mensaje de error y el oldData sería en este caso para que no se me borre el email que ya estaba en el formulario
                return res.render('users/login', {
                    errors: {
                        email: {
                        msg:'Las credenciales son incorrectas'
                        }
                    },
                    oldData: req.body
                });
                
            }
            //este return corresponde al if que pregunta si existe el email en la base de datos
            return res.render('users/login', {
                errors: {
                    email: {
                    msg:'Ud. no se encuentra registrado, por favor registrese'
                    }        
                }
            });
    },
    profile: (req, res) => {
        res.render('users/profile', {user: req.session.userLogged})
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }

};

module.exports = userController;