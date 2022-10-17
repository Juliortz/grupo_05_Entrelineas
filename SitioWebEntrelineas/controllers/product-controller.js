const db = require('../database/models');
const sequelize = db.sequelize;

const Products = db.Product;

const productController = {
    list: (req, res)=> {
        console.log(Products);
        Products.findAll()
        .then(product => {
            res.render("products/products", {product})
        })
    }
}

module.exports = productController

// const moviesController = {
//     list: (req, res) => {
//         db.Movie.findAll()
//             .then(movies => {
//                 res.render('moviesList.ejs', {movies})
//             })
//     },
//     detail: (req, res) => {
//         db.Movie.findByPk(req.params.id)
//             .then(movie => {
//                 res.render('moviesDetail.ejs', {movie});
//             });
//     },
//     new: (req, res) => {
//         db.Movie.findAll({
//             order : [
//                 ['release_date', 'DESC']
//             ],
//             limit: 5
//         })
//             .then(movies => {
//                 res.render('newestMovies', {movies});
//             });
//     },
//     recomended: (req, res) => {
//         db.Movie.findAll({
//             where: {
//                 rating: {[db.Sequelize.Op.gte] : 8}
//             },
//             order: [
//                 ['rating', 'DESC']
//             ]
//         })
//             .then(movies => {
//                 res.render('recommendedMovies.ejs', {movies});
//             });
//     }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
//     add: function (req, res) {
//         res.render('/moviesAdd')   
//     },
//     create: async function (req, res) {
//         try {
//             const newMovie = await db.Movie.create({
//                 title: req.body.title,
//                 rating: req.body.rating,
//                 length: req.body.length,
//                 awards: req.body.awards,
//                 release_date: req.body.release_date,
//             });
//             console.log(newMovie);
//             res.redirect('/movies');
//         } catch (e) {
//             console.log(e);
//     }},
//     edit: function(req, res) {
//         // TODO
//     },
//     update: function (req,res) {
//         // TODO
//     },
//     delete: function (req, res) {
//         // TODO
//     },
//     destroy: function (req, res) {
//         // TODO
//     }

// }