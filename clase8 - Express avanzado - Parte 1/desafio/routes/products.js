const express = require('express');
const router = express.Router();
const Products = require('../Productos');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();

// EJERCICIO A)
router.get('/productos', (req, res) => {
    if (typeof getProducts == 'string') {
        res.status(200).json((JSON.parse(getProducts)));
    } else {
        res.status(404).json({ error: 'no hay productos cargados' });
    };
});

// EJERCICIO B)
router.get('/productos/:id', (req, res) => {
    if (typeof getProducts == 'string') {
        let products = JSON.parse(getProducts);
        let productid = req.params.id;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == productid) {
                res.status(200).json(products[i]);
            };
        };
    } else {
        res.status(404).json({ error: 'no hay productos cargados' });
    };
});

// EJERCICIO C)
router.post('/productos', (req, res) => {
    let data = req.body
    let postProduct = newProduct.post(data)
    res.json(postProduct);
});

module.exports = router;