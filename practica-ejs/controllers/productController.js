const path = require("path");
const fs = require("fs");
const productsPath = path.join(__dirname, "../data/lista-comidas.json");
const productsList = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
const { v4: uuidv4 } = require("uuid");
//console.log(productsList);

const productController = {
  getProductById: (req, res) => {
    let id = req.params.id;
    let plato = productsList.find((plato) => plato.id == id);
    res.render("detalleMenu", { plato });
  },
  list: (req, res) => {
    //todos los productos
    res.render("index", { menu: productsList });
  },
  search: (req, res) => {
    let search = req.query.search;
    let plato = productsList.filter((plato) =>
      plato.title.toLowerCase().includes(search.toLowerCase())
    );
    plato.length == 1
      ? res.render("detalleMenu", { plato: plato[0] })
      : res.render("index", { menu: productsList });
  },

  createProduct: (req, res) => {
    res.render("./products/form-create");
  },

  saveProduct: (req, res) => {
    if (req.body) {
      let plato = {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        currency: req.body.currency,
       // imageProduct: req.file.filename, //ESTO ME VOLVIO LOCO! NO ESTA GUARDANDO IMAGEN. CREO QUE SI EN EDIT, PERO MAL!
      };
      if (req.file) {
        plato.imageProduct = req.file.filename;
      }
      productsList.push(plato);
    }
    // console.log(plato);
    fs.writeFileSync(productsPath, JSON.stringify(productsList, null, 2));
    res.redirect("/products#menu");
  },

  edit: (req, res) => {
    let id = req.params.id;
    let plato = productsList.find((plato) => plato.id == id);
    res.render("./products/form-edit", { plato });
  },

  update: (req, res) => {
    let id = req.params.id; 
    let index = productsList.findIndex((plato) => plato.id == id);
    productsList[index].title = req.body.title;
    productsList[index].description = req.body.description;
    productsList[index].price = req.body.price;
    productsList[index].currency = req.body.currency;
    if (req.file) {
      productsList[index].imageProduct = req.file.filename;
    }
    //console.log(productsList);
    fs.writeFileSync(productsPath, JSON.stringify(productsList, null, 2));
    res.redirect("/products#menu");
  },
  delete: (req, res) => {
    let id = req.params.id;
    //let plato = productsList.find((plato) => plato.id == id);
    //productsList.splice(productsList.indexOf(plato), 1);  UNA FORMA DE DELETE EN ARRAY
    let listFiltered = productsList.filter((plato) => plato.id != id); //OTRA FORMA DE DELETE EN ARRAY, no se cual es mejor
    fs.writeFileSync(productsPath, JSON.stringify(listFiltered, null, 2));
    //res.redirect("/products#menu");
    res.render("index", { menu: listFiltered });
  },
};

module.exports = productController;
