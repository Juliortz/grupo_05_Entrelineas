const db = require('../database/models');
const sequelize = db.sequelize;

const Topics = db.Topic;
const Categories = db.Category;
const Products = db.Product;
const ProductsCategories = db.ProductCategory;
const ProductsTopics = db.ProductTopic;
let img= "";

const productApiController = {
    list: (req, res)=> {
        
        Products.findAll()
        .then(products => {
            return res.status(200).json({
                total: products.lenght,
             //   totalByCategory: ???,
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

module.exports = productApiController

