const path = require("path");
const fs = require("fs");
const productsPath = path.join(__dirname, "../data/lista-comidas.json");
const productsList = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

const mainController = {
  index: (req, res) => {
    res.render("index", { menu: productsList });
  },
};

module.exports = mainController;
