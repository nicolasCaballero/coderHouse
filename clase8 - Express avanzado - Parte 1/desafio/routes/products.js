const express = require('express');
const router = express.Router();
const Products = require('../Productos');
const newProduct = new Products(`productos.json`);

router.get('/productos', (req, res) => {
    let getProducts = newProduct.read();
    if (typeof getProducts == 'string') {
        res.send(getProducts)
    } else {
        res.json({error : 'no hay productos cargados'})
    }
});
router.get('/productos/:id', (req, res) => {
    res.send('tests');
});

module.exports = router;