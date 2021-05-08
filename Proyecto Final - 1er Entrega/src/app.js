const express = require('express');
const app = express();
const port = 8080;
const server = app.listen(port, () => {console.log(`Server initialized on port http://localhost:${server.address().port}`);});

const Products = require('./Productos');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const toThousand = n =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
const methodOverride = require('method-override');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.redirect('/productos')
});

app.get('/productos', (req, res) => {
    let products = JSON.parse(getProducts)
    res.render('../views/products', {products, toThousand})
});
    
app.use('/api', productRoutes);