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
    post(sku, title, price, qty, thumbnail, description) {
        try {
            let checkIfFileExists = this.get();
            if (typeof checkIfFileExists == 'string') {

                let parsedJSON = JSON.parse(checkIfFileExists);
                let newProduct = {
                    id: parsedJSON.length + 1,
                    sku: sku,
                    timestamp: new Date(),
                    title: title,
                    price: price,
                    qty: qty,
                    thumbnail: thumbnail,
                    description: description
                };
                parsedJSON.push(newProduct);
                fs.writeFileSync('./carrito.json', JSON.stringify(parsedJSON, null, 1));
            } else {

                let newFile = [{
                    id: 1,
                    sku: sku,
                    timestamp: new Date().toLocaleTimeString(),
                    title: title,
                    price: price,
                    qty: qty,
                    description: description,
                    thumbnail: thumbnail
                }];

                fs.writeFileSync('./carrito.json', JSON.stringify(newFile, null, 1));
            };
        } catch (err) {
            console.log(err);
        };
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