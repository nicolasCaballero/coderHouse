const express = require('express');
const router = express.Router();
const Carrito = require('../Carrito');
const newCart = new Carrito(`productos.json`);
const getCart = newCart.get();
const Products = require('../Productos');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();
const toThousand = n =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

router.get('/', (req, res) => {
    if (typeof getCart == 'string') {
        let cart = JSON.parse(getCart);
        let cartTotal = [];
        for (let i = 0; i < cart.length; i++) {
            for (let j = 0; j < cart[i].productos.length; j++) {
                cartTotal.push(cart[i].productos[j].price);
            }
        }
        let total = cartTotal.reduce((total, item) => (total = total + Number(item)),0);
        res.render('../views/cart', {cart, toThousand, total});
    } else {
        res.status(404).json({
            error: 'no hay productos cargados'
        });
    };
});

router.post('/agregar/:id', (req, res) => {
    let products = JSON.parse(getProducts);
    let productId = req.params.id;
    let product;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == productId) {
            product = {
                id: products[i].id,
                sku: products[i].sku,
                timestamp: products[i].timestamp,
                title: products[i].title,    
                price: products[i].price,
                qty: products[i].qty,
                thumbnail: products[i].thumbnail,
                description: products[i].description
              }
        };
    };
    newCart.post(product);
    res.redirect('/carrito');
});

router.post('/borrar', (req, res) => {
    newCart.delete(parseInt(req.body.productId));
    res.redirect('/carrito');
});

module.exports = router;