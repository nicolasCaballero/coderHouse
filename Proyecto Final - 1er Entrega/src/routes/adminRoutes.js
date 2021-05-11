const express = require('express');
const router = express.Router();
const Products = require('../Productos');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();
const toThousand = n =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

router.get('/', (req, res) => {
    res.render('../views/admin/index')
})

router.get('/productos/crear', (req, res) => {
    res.render('../views/admin/productAdd');
});

router.get('/productos/listado', (req, res) => {
    let products = JSON.parse(getProducts);
    res.render('../views/admin/productsAdministration', {products, toThousand});
});

router.get('/productos/delete/:id', (req, res) => {
    let productToDelete = newProduct.delete(parseInt(req.params.id));
    res.redirect('/admin/productos/listado');
});

router.get('/productos/edit/:id', (req, res) => {
    if (typeof getProducts == 'string') {
        let products = JSON.parse(getProducts);
        let productId = req.params.id;
        let product = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == productId) {
                product.push(products[i]);
            };
        };
        res.render('../views/admin/productEdit', {product: product});
    } else {
        res.status(404).json({
            error: 'no hay productos cargados'
        });
    };
});

router.post('/productos/crear', (req, res) => {
    let sku = req.body.sku;
    let title = req.body.title;
    let price = req.body.price;
    let qty = req.body.qty;
    let thumbnail = req.body.thumbnail;
    let description = req.body.description;
    let postProduct = newProduct.post(sku, title, parseInt(price), parseInt(qty), thumbnail, description);
    res.redirect('/admin/productos/listado');
});

router.put('/productos/edit/:id', (req, res) => {
    let sku = req.body.sku;
    let timestamp = req.body.timestamp;
    let title = req.body.title;
    let price = req.body.price;
    let qty = req.body.qty;
    let thumbnail = req.body.thumbnail;
    let description = req.body.description;
    let productToUpdate = newProduct.put(parseInt(req.params.id), sku, timestamp, title, parseInt(price), parseInt(qty), thumbnail, description);
    res.redirect('/admin/productos/listado')
});

module.exports = router;