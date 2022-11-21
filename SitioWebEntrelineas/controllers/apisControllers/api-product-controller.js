const db = require('../../database/models');
const sequelize = db.sequelize;

const Topics = db.Topic;
const Categories = db.Category;
const Products = db.Product;
const ProductsCategories = db.ProductCategory;
const ProductsTopics = db.ProductTopic;
let img= "";

const apiProductController = {
    list: (req, res)=> {
        
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

