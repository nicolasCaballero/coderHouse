const express = require('express');
const router = express.Router();
const Products = require('../Productos');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();
const toThousand = n =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

router.get('/search', (req, res) => {
    if (typeof getProducts == 'string') {
        let products = JSON.parse(getProducts);
        let productId = req.query.search;
        console.log(productId);
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

router.get('/', (req, res) => {
    if (typeof getProducts == 'string') {
        let products = JSON.parse(getProducts);
        res.render('../views/products', {products, toThousand});
    } else {
        res.status(404).json({
            error: 'no hay productos cargados'
        });
    };
});

router.get('/buscar', (req, res) => {
    res.render('../views/buscarPorId');
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