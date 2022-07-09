const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
// router.get('/detalle/:id', mainController.detalle);
// router.get('/search', mainController.search);

module.exports = router;
