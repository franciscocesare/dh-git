const fs = require("fs");
const listPlatos = fs.readFileSync("listaComidas.json", "utf-8");
const listPlatosJSON = JSON.parse(listPlatos);
//console.log(listPlatosJSON);

const productController = {
  detalle: (req, res) => {
    let id = req.params.id;
    let plato = listPlatosJSON.find((plato) => plato.id == id);
    res.render("detalleMenu", { plato });
  },
  list: (req, res) => {
    res.render("index", { menu: listPlatosJSON });
  },
  search: (req, res) => {
    let search = req.query.search;
    let plato = listPlatosJSON.filter((plato) =>
      plato.title.toLowerCase().includes(search.toLowerCase())
    );
    plato.length == 1
      ? res.render("detalleMenu", { plato: plato[0] })
      : res.render("index", { menu: listPlatosJSON });
  },
  createProduct: (req, res) => {
    res.render("form-create");
  },
  saveProduct: (req, res) => {
    let plato = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      currency: req.body.currency,
      image: req.body.image,
    };
    listPlatosJSON.push(plato);
    //console.log(listPlatosJSON);
    fs.writeFileSync("listaComidas.json", JSON.stringify(listPlatosJSON));
    res.redirect("/product/list");
  },
  edit: (req, res) => {
    let id = req.params.id;
    let plato = listPlatosJSON.find((plato) => plato.id == id);
    res.render("form-edit", { plato });
  },
  update: (req, res) => {
    let id = req.body.id;
    let plato = listPlatosJSON.find((plato) => plato.id == id);
    plato.title = req.body.title;
    plato.description = req.body.description;
    plato.price = req.body.price;
    plato.currency = req.body.currency;
    plato.image = req.body.image || plato.image;
    fs.writeFileSync("listaComidas.json", JSON.stringify(listPlatosJSON));
    res.redirect("/product/list");
  },
  delete: (req, res) => {
    let id = req.params.id;
    let plato = listPlatosJSON.find((plato) => plato.id == id);
    //listPlatosJSON.splice(listPlatosJSON.indexOf(plato), 1);  UNA FORMA DE DELETE EN ARRAY
    listFiltered = listPlatosJSON.filter((plato) => plato.id != id); //OTRA FORMA DE DELETE EN ARRAY, no se cual es mejor
    fs.writeFileSync("listaComidas.json", JSON.stringify(listFiltered));
    res.redirect("/product/list");
  }
};

module.exports = productController;
