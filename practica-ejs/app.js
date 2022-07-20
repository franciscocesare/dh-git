const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const PORT = process.env.PORT || 3005;
const path = require('path');
const methodOverride = require('method-override');


app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
app.use('/products', productRouter); 

app.listen(PORT, () => { console.log(`Servidor arriba en el puerto ${PORT}, visite: http://localhost:${PORT}`);})