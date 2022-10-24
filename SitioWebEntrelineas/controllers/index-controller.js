const db = require('../database/models');
const sequelize = db.sequelize;

const Products = db.Product;

const controller = {
  index: (req, res)=> {

    res.render('index', {novedades: productsNovedades, masVendidos: productsMasVendidos, sagas: productsSagas, packs: productsPacks, users: usersData, user: req.session.userLogged })
  }
}
module.exports = controller;
