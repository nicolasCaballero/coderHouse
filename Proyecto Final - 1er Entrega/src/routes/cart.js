const express = require('express');
const router = express.Router();
const Products = require('../Productos');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();
const toThousand = n =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");


router.get('/', (req, res) => {

});

module.exports = router;