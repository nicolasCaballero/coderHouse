const express = require('express');
const router = express.Router();
const Products = require('../Productos');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();
const toThousand = n =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

router.get('/', (req, res) => {
    if (typeof getProducts == 'string') {
        let products = JSON.parse(getProducts)
        res.render('../views/products', {products, toThousand});
    } else {
        res.status(404).json({
            error: 'no hay productos cargados'
        });
    };
});

router.get('/add', (req, res) => {
    res.render('../views/productAdd');
});

router.get('/edit/:id', (req, res) => {
    if (typeof getProducts == 'string') {
        let products = JSON.parse(getProducts);
        let productId = req.params.id;
        let product = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == productId) {
                product.push(products[i]);
            };
        };
        res.render('../views/productEdit', {product: product});
    } else {
        res.status(404).json({
            error: 'no hay productos cargados'
        });
    };
});

router.post('/', (req, res) => {
    let sku = req.body.sku;
    let title = req.body.title;
    let price = req.body.price;
    let qty = req.body.qty;
    let thumbnail = req.body.thumbnail;
    let description = req.body.description;
    let postProduct = newProduct.post(sku, title, parseInt(price), parseInt(qty), thumbnail, description);
    res.redirect('/')
});

router.put('/edit/:id', (req, res) => {
    let sku = req.body.sku;
    let timestamp = req.body.timestamp;
    let title = req.body.title;
    let price = req.body.price;
    let qty = req.body.qty;
    let thumbnail = req.body.thumbnail;
    let description = req.body.description;
    let productToUpdate = newProduct.put(parseInt(req.params.id), sku, timestamp, title, parseInt(price), parseInt(qty), thumbnail, description);
    res.redirect('/')
});
router.get('/delete/:id', (req, res) => {
    let productToDelete = newProduct.delete(parseInt(req.params.id));
    res.redirect('/productos/vista');
});

router.get('/:id', (req, res) => {
    if (typeof getProducts == 'string') {
        let products = JSON.parse(getProducts);
        let productId = req.params.id;
        let product = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == productId) {
                product.push(products[i]);
            };
        };
        res.render('../views/productDetail', {product, toThousand});
    } else {
        res.status(404).json({
            error: 'no hay productos cargados'
        });
    };
});
module.exports = router;