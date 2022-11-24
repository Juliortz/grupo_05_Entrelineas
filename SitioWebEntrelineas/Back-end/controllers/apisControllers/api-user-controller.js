const db = require('../../database/models');
const sequelize = db.sequelize;
const Users = db.User;
let img= "";



const apiUserController = {
    list: (req, res)=> {
        Users.findAll({attributes:{exclude:['password']}})
        .then(user => {
            return res.status(200).json({
                total: user.length,
                data: user,
                status: 200
            })
        })
    },

    detail: (req, res)=> {
        Users.findByPk(req.params.id, {attributes:{
            include: {association: "countries",
            association: "topics",
            association: "products"},
            },attributes: {exclude:['password']}})
        .then((users)=>{
            console.log(users)
           return res.status(200).json({
                data: users,
                status: 200,
            })
        })
    },
}

module.exports = apiUserController