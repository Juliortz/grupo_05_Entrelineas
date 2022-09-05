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
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
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
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let idProduct = req.params.id;
        let productEdit = products.find((product)=> product.id == idProduct);
        res.render('product-edition', {productEdit});
    },

    update: (req, res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        
        products.forEach((p) => {
            if(p.id == req.params.id){
                p.titulo = req.body.titulo;
                p.autor = req.body.autor;
                p.sinopsis = req.body.sinopsis;
                p.edicion = req.body.edicion;
                p.paginas = req.body.paginas;
                p.idioma = req.body.idioma;
                p.precio = req.body.precio;
                p.presentacion = req.body.presentacion;

                req.body.novedades?p.novedades=true : p.novedades=false;
                req.body.masVendidos?p.masVendidos = true: p.masVendidos = false;
                req.body.sagas?p.sagas = true : p.sagas = false;
                req.body.packs? p.packs = true : p.packs = false;
            
                if(req.file && req.file != 'default-image.jpg'){
                    fs.unlinkSync("./public/images/products/" + p.img);
                    p.img = req.file.filename;
                };
            };
        });
        const data = JSON.stringify(products, null, " ");
        fs.writeFileSync(productsFilePath, data);

        
        res.redirect("/products/detail/" + req.params.id);

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