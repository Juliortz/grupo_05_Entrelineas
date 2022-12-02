const db = require('../../database/models');
const sequelize = db.sequelize;
const Products = db.Product;
let img= "";

const apiProductController = {
    list: (req, res)=> {
        
        Products.findAll({
            include: [{association: "categories"}, {association: "topics"}]
        })
        .then(products => {
            return res.status(200).json({
                total: products.length,
                data: products,
                status: 200
            })
        })
    },
    detail: (req, res)=> {

        Products.findByPk(req.params.id, {
            include: {association: "categories" }
        })
        .then((product)=>{
           
           return res.status(200).json({
                data: product,
                status: 200,
            })
        })
    },
    
}

module.exports = apiProductController

