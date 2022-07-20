const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		//console.log(products);
		res.render('products', {products: products});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let product = products.find(product => product.id == req.params.id);

		console.log(products);
		res.render('detail', { product: product });
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		if (req.body) {
			const newProduct = {
				id: uuid.v4(),
				name: req.body.name,
				price: req.body.price,
				discount: req.body.discount,
				category: req.body.category,
				description: req.body.description,
			};
			if (req.files) {
				newProduct.image = req.files.filename //buscar otro jeito 
			}	
			products.push(newProduct);
			fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
			res.redirect('/products');
		}
		console.log(req.body);
		console.log(req.files);
	},

	// Update - Form to edit
	edit: (req, res) => {
		res.render('product-edit-form');
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;