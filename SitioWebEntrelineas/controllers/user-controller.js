const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));



const userController = {
    register: (req, res)=> {
        res.render('users/register');
    },

    registerProsses: (req, res)=> {
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
            avatar: "default-image.jpg",
            };

            if(req.file) {
                newUser.avatar = req.file.filename;
            }

        users.push(newUser);
        const data = JSON.stringify(users, null, " ");
        fs.writeFileSync(usersFilePath, data);

        res.redirect('/')
    },

    login: (req, res)=>{
        res.render('users/login');
    }
};

module.exports = userController;