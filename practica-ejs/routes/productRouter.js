const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const productController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folderStorage = path.join(__dirname, '../public/images/products');
        cb(null, folderStorage)  
    },
    filename: (req, file, cb) => {
        //console.log(file); //este sale bien???
        let nameFile = `product-${Date.now()}-${file.originalname}`
        cb(null, nameFile);
    }
});
const upload = multer({ storage: storage }); //este storage que onda???????

//Todos los productos
router.get('/', productController.list); 
router.get('/search', productController.search);
//Crear nuevo producto por eso dos rutas - FORM y SAVE
router.get('/create', productController.createProduct);
router.post('/', upload.single('imageProduct'), productController.saveProduct); //profe planteo ponerle solo / sin /create
//detalle de producto por ID
router.get('/:id', productController.getProductById);
//editar producto por ID
router.get('/edit/:id', productController.edit);
router.put('/:id', upload.single('imageProduct'), productController.update);

router.delete('/delete/:id', productController.delete);

module.exports = router;