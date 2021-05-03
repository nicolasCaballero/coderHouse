const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const productRoutes = require('./routes/products');
const methodOverride = require('method-override');
const Products = require('./Productos');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});

io.on('connection', socket => {
    console.log(`CLIENT:${socket.id} is online`)
    socket.emit('products', JSON.parse(getProducts));
    io.sockets.emit('products', JSON.parse(getProducts));
});

app.get('/productos/vista', (req, res) => {
    let products = JSON.parse(getProducts)
    res.render('../views/products', {products: products})
});

app.use('/api', productRoutes);