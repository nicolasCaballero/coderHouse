const express = require('express');
const app = express();
const port = 3434;
const server = app.listen(port, () => {console.log(`Server initialized on port http://localhost:${server.address().port}`);});
const handlebars = require('express-handlebars');
const productRoutes = require('./routes/products');
const methodOverride = require('method-override');
const Products = require('./Productos');
const { json } = require('express');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();
const toThousand = n =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
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
    let name = 'Nicolas'
    res.render('index', {layout:'index', name});
})
app.get('/productos/vista', (req, res) => {
    let products = JSON.parse(getProducts)
    res.render('products', {layout:'products', products, toThousand})
});
app.use('/api', productRoutes);
