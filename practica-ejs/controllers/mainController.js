const listPlatos = require("../listaComidas.json");

const mainController = {
  index: (req, res) => {
    res.render("index", { menu: listPlatos });
  },
};

module.exports = mainController;
