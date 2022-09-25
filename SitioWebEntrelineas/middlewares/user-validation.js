const { body } =  require('express-validator');

const validateRegister = [
    body('first_name').notEmpty().withMessage('¡Hey, debes escribir tu nombre!').bail()
    .isString().withMessage('¡Solo letras, eh!'),
    body('last_name').notEmpty().withMessage('¡Hey, debes escribir tu apellido!').bail()
    .isString().withMessage('¡Solo letras, eh!'),
    body('user').notEmpty().withMessage('¡Olvidaste escribir un nombre de usuario!').bail()
    .isLength({min: 5}).withMessage('Debe tener al menos cinco caracteres').bail()
    .isLength({max: 10}).withMessage('Con menos de diez caracteres es suficiente').bail(),
    body('email').notEmpty().withMessage('¡Olvidaste escribir un email!').bail()
    .isEmail().withMessage('¡Tiene que ser un email válido!'),
    body('password').notEmpty().withMessage('¡Olvidaste escribir una contraseña!').bail()
    .isLength({min: 6}).withMessage('Debe tener al menos seis caracteres').bail()
];

module.exports = validateRegister