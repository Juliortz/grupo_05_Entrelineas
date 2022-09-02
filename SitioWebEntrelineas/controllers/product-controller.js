const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));



const productController = {

    list: (req, res)=>{

//  Debería mostrar un listado de 
//  todos los productos y renderizar la vista
//  'products' que hay que hacerla y utilizar la vista partials/product-item, 
//  en general es similar al index.ejs pero no están divididos en novedades, sagas, etc






    },

    detail: (req, res)=> {
    
    let productDetail = products.find((product)=>product.id == req.params.id);
    res.render('product-detail', {productDetail});
    },


    cart: (req, res)=> {
        //este controlador nos lleva carrito que también tenemos que hacer la vista dinámica
        res.render('product-cart');
    },

    
    cartAdd: (req, res)=>{
        // Aquí va la lógica de sumar productos al carrito y tener la posibilidad de eliminarlos del carrito






















    },


    edit: (req, res)=> {
        //Esta función solo lleva al formulario de edición del producto
        let idProduct = req.params.id;
        let productEdit = products.find((product)=> product.id == idProduct);
        res.render('product-edition', {productEdit});
    },

    update: (req, res)=>{
        //Esta función lleva la lógica de edición del producto 
        // y redirecciona a la vista de detalle del producto















    },


    
    create: (req, res)=>{
        //Esta función solo lleva al formulario de creación del producto
        res.render('product-create-form');
    },

    store: (req, res)=>{
        //Aquí va la lógica de creación del producto

















    },

    destroy: (req, res) => {
        //lógica para borrar producto y redireccionar al listado de productos





















    },


};

module.exports = productController;