import fs from 'fs';

class Archivo {
    constructor(name) {
        this.name = name;
    };
    async read() {
        try {
            const cont = await fs.promises.readFile('./productos.txt', 'utf-8');
            return cont
        } catch (error) {
            return [];
        };
    };
    async save(title, price, thumbnail) {
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
    }

};

let test = new Archivo(`productos.txt`);

/* 

TEST read() method 
console.log(await test.read());

TEST save() method
test.save('AURICULARES INALÁMBRICOS LIGHTSPEED PRO X PARA GAMING', 32999, 'https://logitechar.vteximg.com.br/arquivos/ids/157528-450-450/981-000906.png?v=637344890101600000');

TEST delete() method
test.delete() 

*/