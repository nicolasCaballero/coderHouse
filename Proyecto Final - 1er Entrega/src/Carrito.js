const fs = require('fs');

class Carrito {
    constructor(name) {
        this.name = name;
    };
    get() {
        try {
            const cont = fs.readFileSync('./carrito.json', 'utf-8');
            return cont
        } catch (error) {
            return [];
        };
    };
    post(productArray) {
        let cart = this.get();
        let parsedCart = JSON.parse(cart);
        let cartToKeep = productArray;
        for (let i = 0; i < parsedCart.length; i++) {
            parsedCart[i].productos.push(cartToKeep)
        }
        fs.writeFileSync('./carrito.json', JSON.stringify(parsedCart, null, 1));
    };
    delete(id) {
        let cart = this.get();
        let parsedCart = JSON.parse(cart);
        let cartToKeep = [];
        for (let i = 0; i < parsedCart.length; i++) {
            for (let j = 0; j < parsedCart[i].productos.length; j++) {
                if (parsedCart[i].productos[j].id !== id) {
                    cartToKeep.push(parsedCart[i].productos[j]);
                }
            }
            parsedCart[i].productos = cartToKeep
        }
        fs.writeFileSync('./carrito.json', JSON.stringify(parsedCart, null, 1));
    };
};
module.exports = Carrito;