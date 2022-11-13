const { body } =  require('express-validator');
const path = require('path');

const validateProductCreate = [
    body('titulo').notEmpty().withMessage('¡Hey, el libro debe tener un título!').bail()
    .isLength({min: 5}).withMessage('¡Debe tener al menos cinco caracteres!'),
    body('autor').notEmpty().withMessage('¡Hey, el libro debe tener un autor!').bail()
    .isLength({min: 5}).withMessage('¡Debe tener al menos cinco caracteres!'),
    body('sinopsis').notEmpty().withMessage('¡Hey, el libro debe tener una sinopsis!').bail()
    .isLength({min: 20}).withMessage('¡Debe tener al menos veinte caracteres!'),
    body('precio').notEmpty().withMessage('¡Hey, el libro debe tener un precio!').bail()
    .isInt().withMessage('¡Solo números, eh!'),
    body('imagenProducto').custom((value, { req }) => {
        let file = req.file;
        if (!file) {
            throw new Error('¡El libro debe tener una imagen!');
        }else{
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error('¡Solo pueden ser archivos «.jpg», «.jpeg», «.png» o «.gif»!')
            }
        }  
        return true; 
    }),
    body('genlit').notEmpty().withMessage('¡Debes seleccionar un género!').bail()
    .isIn(['Fantasía', 'Historia', 'Ciencia ficción', 'Romance', 'Política', 'Drama', 'Policial', 'Economía', 'Terror', 'Suspenso', 'Autoayuda']),
    body('edicion').notEmpty().withMessage('¡Hey, el libro debe tener un año de edición!').bail()
    .isInt().withMessage('¡Solo números, eh!'),
    body('paginas').notEmpty().withMessage('¡Hey, no olvides el número de páginas!').bail()
    .isInt().withMessage('¡Solo números, eh!'),
    body('idioma').notEmpty().withMessage('¡Hey, el libro debe tener un idioma!'),
    body('presentacion').notEmpty().withMessage('¡Hey, el libro debe tener una presentación!')

]

module.exports = validateProductCreate