const express = require('express');
const app = express();
const port = 3434;
const server = app.listen(port, () => {console.log(`Server initialized on port http://localhost:${server.address().port}`);});
const productRoutes = require('./routes/products');
const methodOverride = require('method-override');
const Products = require('./Productos');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();
const toThousand = n =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
server.on(`error`, error => console.log(`Server error ${error}`));

app.get('/', (req, res) => {
    res.render('../views/index');
})
app.get('/productos/vista', (req, res) => {
    let products = JSON.parse(getProducts)
    res.render('../views/products', {products: products})
});
app.use('/api', productRoutes);
