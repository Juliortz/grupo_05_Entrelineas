const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
    index: (req, res)=> {
        
        let productsNovedades = products.filter(p => p.novedades == true)
		let productsMasVendidos = products.filter(p => p.masVendidos == true)
        let productsSagas = products.filter(p => p.sagas == true)
		let productsPacks = products.filter(p => p.packs == true)
        res.render('index', {novedades: productsNovedades, masVendidos: productsMasVendidos, sagas: productsSagas, packs: productsPacks})
    }
}
module.exports = controller;