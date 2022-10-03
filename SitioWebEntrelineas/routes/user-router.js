const express = require('express');
const router = express.Router();
const multer = require('multer');
const validationRegister = require('../middlewares/user-validation');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/users");
    },
    filename: function (req, file, cb) {
      console.log({ file });
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  
  const upload = multer({ storage });

const userController = require('../controllers/user-controller');

router.get('/register', userController.register);

router.post('/register', upload.single('avatar'), validationRegister, userController.registerProsses);

router.get('/login', userController.login);
router.post('/login',userController.logVerification)


module.exports = router;