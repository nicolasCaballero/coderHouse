const fs = require('fs');

class Productos {
    constructor(name) {
        this.name = name;
    };
    read() {
        try {
            const cont = fs.readFileSync('./productos.json', 'utf-8');
            return cont
        } catch (error) {
            return [];
        };
    };
    /*     async save(title, price, thumbnail) {
            try {
                let checkIfFileExists = await this.read();
                if (typeof checkIfFileExists == 'string') {

                    let parsedJSON = JSON.parse(checkIfFileExists);

                    let newProduct = {
                        id: parsedJSON.length + 1,
                        name: title,
                        price: price,
                        thumbnail: thumbnail
                    };

                    parsedJSON.push(newProduct);
                    await fs.promises.writeFile('./productos.txt', JSON.stringify(parsedJSON, null, 1));
                    console.log(`Product: ${newProduct.name} successfully added!`);
                } else {

                    let newFile = [{
                        id: 1,
                        name: title,
                        price: price,
                        thumbnail: thumbnail
                    }];

                    await fs.promises.writeFile('./productos.txt', JSON.stringify(newFile, null, 1));
                    console.log(`Successfully created the file "productos.txt" and added the product: ${newFile[0].name}`);
                };
            } catch (err) {
                console.log(err);
            };
        };
        async delete() {
            fs.unlink(`./productos.txt`, err => {
                if (err) {
                    console.log(`Oops! Couldn't delete file because it doesn't exists!`);
                } else {
                    console.log(`productos.txt successfully deleted!`);
                };
            });
        } */

};
module.exports = Productos;