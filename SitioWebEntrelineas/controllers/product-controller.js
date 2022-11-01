const db = require('../database/models');
const sequelize = db.sequelize;

const Topics = db.Topic;
const Categories = db.Category;
const Products = db.Product;
let img= "";
let topicsArray = [];

const productController = {
    list: (req, res)=> {
        
        Products.findAll()
        .then(product => {
            res.render("products/products", {product})
        })
    },
    create:(req, res)=>{
        
        Topics.findAll()
        .then((topics)=> {
            for(let i=0; i<topics.length; i++){
                topicsArray.push(topics[i].dataValues.name)
            } 
            res.render("products/product-create-form", {topics: topicsArray})
        }) 
    },
    store: (req, res)=>{
        if (req.file){
             img = req.file.filename;
        }
        else{
             img = "default-image.jpg"
        }
        Products.create({
            title: req.body.titulo,
            author: req.body.autor,
            synopsis: req.body.sinopsis,
            price: req.body.precio,
            edition: req.body.edicion,
            pages: req.body.paginas,
            image: img,
            lenguage: req.body.idioma,
            presentation: req.body.presentacion,
        })
        res.redirect("/products")
    },
    detail: (req, res) =>{
        Products.findByPk(req.params.id, {
            include: {association: "categories" }
        })
        .then((libro)=>{
           
            res.render("products/product-detail", {
                libro:libro
            })
        })
    },

    destroy: (req, res)=>{
        Products.findByPk((req.params)) 
        .then((libro)=>{
            if (libro.image !="default-image.jpg"){
                fs.unlinkSync("./public/images/products/" + producto.img);
                console.log("Producto deleted successfull");
            }
        })
        Products.destroy({
            where: {id: req.params.id}
        })
        res.redirect("/products")
    },
    edit: (req, res)=>{
        Products.findByPk(req.params.id, {
            include: {association: "categories" }
        })
        .then((libro)=>{
            res.render("products/product-edition", {
                libro:libro
            })
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