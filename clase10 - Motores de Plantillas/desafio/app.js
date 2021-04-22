const express = require('express');
const app = express();
const port = 3434;
const server = app.listen(port, () => {console.log(`Server initialized on port http://localhost:${server.address().port}`);});
const handlebars = require('express-handlebars');
const productRoutes = require('./routes/products');
const methodOverride = require('method-override');
const Products = require('./Productos');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();

app.engine(
    'hbs',
    handlebars({
        extname: 'hbs',
        defaulLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    })
);
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
server.on(`error`, error => console.log(`Server error ${error}`));

app.get('/', (req, res) => {
    res.render('main', {layout:'index'});
})
app.get('/productos/vista', (req, res) => {
    let parsedProducts = JSON.parse(getProducts);
    res.render('products', {layout:'products', products: parsedProducts})
});
app.use('/api', productRoutes);