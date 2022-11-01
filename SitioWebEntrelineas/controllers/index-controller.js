//const { cloneDeep, isColString } = require('sequelize/types/utils');
const db = require('../database/models');
const sequelize = db.sequelize;

const Products = db.Product;
const Categories = db.Category;
const controller = {
  index: (req, res) => {
    Categories.findAll({
      include: [{association:'products'}]
    })
    .then((categories) => {
    return res.render('index', {categories})
})
}
// const controller = {
//    index: (req, res)=> {
//     let promesProducts =  Products.findAll ()
//     let promesCategories = Categories.findAll({
//       include: ['products']
//     })

//     Promise.all([promesProducts, promesCategories])

//     .then(([allProducts, allCategories])=>{
      
           
//       return res.render('index',{products: allProducts, categories: allCategories})
      
  
//      })

//     }
//   }
}
module.exports = controller;

