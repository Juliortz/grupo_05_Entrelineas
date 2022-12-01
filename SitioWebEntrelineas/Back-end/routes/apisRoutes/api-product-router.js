const express = require('express');
const router = express.Router();
const apiProductController = require('../../controllers/apisControllers/api-product-controller');

router.get('/', apiProductController.list);
router.get('/:id', apiProductController.detail);
router.get('/categories', apiProductController.categories)

module.exports = router