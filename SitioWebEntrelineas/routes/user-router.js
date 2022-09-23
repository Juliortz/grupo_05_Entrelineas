const express = require('express');
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/users");
    },
    filename: function (req, file, cb) {
      console.log({ file });
      cb(null, Date.now() + "" + file.originalname);
    },
  });
  
  const upload = multer({ storage });

const userController = require('../controllers/user-controller');

router.get('/register', userController.register);

router.post('/register', upload.single('avatar'), userController.registerProsses);

router.get('/login', userController.login);


module.exports = router;