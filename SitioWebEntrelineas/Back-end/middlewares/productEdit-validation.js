const path = require('path');
const { body } =  require('express-validator');

const validateProductEdit = [
    body('titulo').notEmpty().withMessage('¡Hey, el libro debe tener un nombre!').bail()
    .isLength({min: 2}).withMessage('¡Debe tener al menos dos caracteres!'),
    body('autor').notEmpty().withMessage('¡Hey, el libro debe tener un autor!').bail()
    .isLength({min: 2}).withMessage('¡Debe tener al menos dos caracteres!'),
    body('sinopsis').notEmpty().withMessage('¡Hey, el libro debe tener una sinopsis!').bail()
    .isLength({min: 5}).withMessage('¡Debe tener al menos cinco caracteres!'),
    body('precio').notEmpty().withMessage('¡Hey, el libro debe tener un precio!').bail()
    .isInt().withMessage('¡Solo números, eh!'),
    // body('imagenProducto').custom((value, { req }) => {
    //     let file = req.file;
    //     if (!file) {
    //         throw new Error('¡El libro debe tener una imagen!');
    //     }else{
    //         let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    //         let fileExtension = path.extname(file.originalname);
    //         if(!acceptedExtensions.includes(fileExtension)){
    //             throw new Error('¡Solo pueden ser archivos «.jpg», «.jpeg», «.png» o «.gif»!')
    //         }
    //     }  
    //     return true; 
    // }),
    body('edicion').notEmpty().withMessage('¡Hey, el libro debe tener un año de edición!').bail()
    .isInt().withMessage('¡Solo números, eh!'),
    body('paginas').notEmpty().withMessage('¡Hey, no olvides el número de páginas!').bail()
    .isInt().withMessage('¡Solo números, eh!'),
    body('idioma').notEmpty().withMessage('¡Hey, el libro debe tener un idioma!'),
    body('presentacion').notEmpty().withMessage('¡Hey, el libro debe tener una presentación!'),
    // body('topics').notEmpty().withMessage('¡Hey, el libro debe tener un género!').bail()
    // .isIn(['Fantasía', 'Historia', 'Ciencia ficción', 'Romance', 'Política', 'Drama', 'Policial', 'Economía', 'Terror', 'Suspenso', 'Autoayuda'])
];

module.exports = validateProductEdit