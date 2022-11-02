const bcrypt = require('bcryptjs');
let contraseniaEncriptado = bcrypt.hashSync("123456", 10)
let isConstraseniaOk = bcrypt.compareSync("123456", contraseniaEncriptado);
console.log(isConstraseniaOk);
let numero = 12345
console.log('"'+numero + '"');