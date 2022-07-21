// ************ Require's ************
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const uploads = require("../../middlewares/multer");

// ************ Validations forms ************
const validateCreateForm = [
    check("name")
        .notEmpty().withMessage("El nombre es requerido").bail() //bail corta, ojo si no va a en todos
        .isLength({ min: 3, max: 30}).withMessage("Un nombre valido!"),
    check("price")
        .notEmpty().withMessage("El precio es requerido")
        .isNumeric( { min: 10 }).withMessage("El precio debe ser un numero"),
    check("discount")
        .notEmpty().withMessage("El descuento es requerido")
        .isNumeric().withMessage("El precio es requerido"),
    check("description")
        .isLength({ min: 8, max: 150}).withMessage("una descripcion de al menos 8 caracteres")
        .notEmpty().withMessage("La descripción es requerida"),
    check("image")
        .custom((value, { req }) => {
            if (req.files.length > 0) {
                return true;
            } else {
                return false;
            }
        }
    ).withMessage("La imagen es requerida")
];

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create/", productsController.create);
router.post("/", uploads.any("image"), validateCreateForm, productsController.store); //PROBAR ARRAY!!!!

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
router.put("/:id", uploads.any("image"), productsController.update);

/*** DELETE ONE PRODUCT ***/
router.delete("/delete/:id", productsController.destroy);

module.exports = router;
