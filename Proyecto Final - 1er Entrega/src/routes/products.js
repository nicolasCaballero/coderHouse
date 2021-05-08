const express = require('express');
const router = express.Router();
const Products = require('../Productos');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();

router.get('/productos', (req, res) => {
    if (typeof getProducts == 'string') {
        res.status(200).json((JSON.parse(getProducts)));
    } else {
        res.status(404).json({
            error: 'no hay productos cargados'
        });
    };
});

router.get('/productos/:id', (req, res) => {
    if (typeof getProducts == 'string') {
        let products = JSON.parse(getProducts);
        let productId = req.params.id;
        let product = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == productId) {
                product.push(products[i]);
            };
        };
        res.render('../views/productDetail', {product: product});
    } else {
        res.status(404).json({
            error: 'no hay productos cargados'
        });
    };
});

router.post('/productos', (req, res) => {
    let sku = req.body.sku;
    let title = req.body.title;
    let price = req.body.price;
    let qty = req.body.qty;
    let thumbnail = req.body.thumbnail;
    let description = req.body.description;
    let postProduct = newProduct.post(sku, title, parseInt(price), parseInt(qty), thumbnail, description);
    res.redirect('/')
});

router.put('/productos/:id', (req, res) => {
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
router.get('/productos/delete/:id', (req, res) => {
    let productToDelete = newProduct.delete(parseInt(req.params.id));
    res.redirect('/productos/vista');
});
module.exports = router;