// ************ Require's ************
const express = require('express');
const router = express.Router();
const uploads = require('../../middlewares/multer');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); 
router.post('/', uploads.any('image') , productsController.store);  //PROBAR ARRAY!!!!


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/:id', uploads.array('image'), productsController.update); 


/*** DELETE ONE PRODUCT ***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
