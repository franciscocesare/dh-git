const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/detalle/:id', productController.detalle);
router.get('/list', productController.list);
router.get('/search', productController.search);

router.get('/create', productController.createProduct);
router.post('/create', productController.saveProduct);

router.get('/edit/:id', productController.edit);
router.put('/edit', productController.update);

router.delete('/delete/:id', productController.delete);

module.exports = router;