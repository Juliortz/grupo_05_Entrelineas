const express = require('express');
const router = express.Router();
const multer = require('multer');
const validationRegister = require('../middlewares/user-validation');
const userController = require('../controllers/user-controller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/users");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  
  const upload = multer({ storage });



router.get('/register', userController.register);

router.post('/register', upload.single('avatar'), validationRegister, userController.registerProcess);

router.get('/login', userController.login);
router.post('/login',userController.logVerification)


module.exports = router;