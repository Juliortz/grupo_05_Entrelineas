const db = require('../../database/models');
const sequelize = db.sequelize;
const Users = db.User;
let img= "";



const apiUserController = {
    list: (req, res)=> {
        Users.findAll()
        .then(user => {
            return res.status(200).json({
                total: user.length,
                data: user,
                status: 200
            })
        })
    },

    detail: (req, res)=> {
        Users.findByPk(req.params.id, {
            include: {association: "countries",
            association: "topics",
            association: "products" }
        })
        .then((product)=>{
        
           return res.status(200).json({
                data: product,
                status: 200,
            })
        })
    },
}

module.exports = apiUserController