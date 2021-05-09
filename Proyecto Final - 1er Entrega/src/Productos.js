const fs = require('fs');

class Productos {
    constructor(name) {
        this.name = name;
    };
    get() {
        try {
            const cont = fs.readFileSync('./productos.json', 'utf-8');
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
                fs.writeFileSync('./productos.json', JSON.stringify(parsedJSON, null, 1));
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

                fs.writeFileSync('./productos.json', JSON.stringify(newFile, null, 1));
            };
        } catch (err) {
            console.log(err);
        };
    };
    put(id, sku, timestamp, title, price, qty, thumbnail, description) {
        let products = this.get();
        let parsedProducts = JSON.parse(products);
        let productToModify = parsedProducts.filter(prodId => prodId.id == id);
        let productToKeep = parsedProducts.filter(prodId => prodId.id !== id);

        let updatedProduct = {
            id: id,
            sku: sku,
            timestamp: timestamp,
            title: title,
            price: price,
            qty: qty,
            thumbnail: thumbnail,
            description: description,
        }

        productToKeep.push(updatedProduct);

        fs.writeFileSync('./productos.json', JSON.stringify(productToKeep, null, 1));
    };
    delete(id) {
        let products = this.get();
        let parsedProducts = JSON.parse(products);
        let productToKeep = parsedProducts.filter(prodId => prodId.id !== id);
        fs.writeFileSync('./productos.json', JSON.stringify(productToKeep, null, 1));
    };
};
module.exports = Productos;