const express = require('express');
const app = express();
const port = 8080;
const server = app.listen(port, () => {console.log(`Server initialized on port http://localhost:${server.address().port}`);});
const path = require('path');

const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const adminRoutes = require('./routes/adminRoutes');

const methodOverride = require('method-override');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => { res.render('../views/index'); });
app.use('/productos', productRoutes);
app.use('/carrito', cartRoutes);
app.use('/admin', adminRoutes);