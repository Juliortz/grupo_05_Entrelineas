const express = require('express');
const router = express.Router();
const multer = require('multer');
const validationRegister = require('../middlewares/user-validation');
const userController = require('../controllers/user-controller');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const userNoLoggedMiddleware = require('../middlewares/userNoLoggedMiddleware');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/users");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  
  const upload = multer({ storage });


//No pueden acceder los usuarios logueados al formulario de registro
router.get('/register', userLoggedMiddleware, userController.register);

router.post('/register', upload.single('avatar'), validationRegister, userController.registerProcess);

//No pueden acceder los usuarios logueados al formulario login
router.get('/login', userLoggedMiddleware, userController.login);
router.post('/login',userController.logVerification);
//No pueden acceder los usuarios no logueados a la vista de perfil
router.get('/profile', userNoLoggedMiddleware,userController.profile);
//desloguearse
router.get('/logout', userController.logout);


module.exports = router;