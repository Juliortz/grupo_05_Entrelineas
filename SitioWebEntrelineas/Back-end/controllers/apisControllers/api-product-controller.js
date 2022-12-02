const db = require('../../database/models');
const sequelize = db.sequelize;

const Categories = db.Category;
const Products = db.Product;
let img= "";

const apiProductController = {
    list: (req, res)=> {
        
        Products.findAll({
            include: [{association: "categories"}, {association: "topics"}]
        })
        .then(products => {

            products = products.map(product=>{
                 product.image = 'http://localhost:3001/images/products/' + product.image
                 return product
            })

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
    categories: (req, res)=> {
        
        Categories.findAll({
            include: [{association: "products" }]
        })
        .then(categories => {
            return res.status(200).json({
                total: categories.length,
                data: categories,
                status: 200
            })
        })
    }
}

module.exports = apiProductController

