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
            let checkIfFileExists = JSON.parse(await this.read());
            if (checkIfFileExists) {

                let newProduct = {
                    id: checkIfFileExists.length + 1,
                    name: title,
                    price: price,
                    thumbnail: thumbnail
                }
                checkIfFileExists.push(newProduct);
                await fs.promises.writeFile('./productos.txt', JSON.stringify(checkIfFileExists, null, 1));
                console.log(`Product: ${newProduct.name} succesfully added!`)
            } else {
                await fs.promises.writeFile('./productos.txt', JSON.stringify(newProduct, null, 1));
                console.log(`Succesfully created the file "productos.txt" and added the new product!`);
            }
        } catch (err) {
            console.log(`Oops! Coudn't write file!`, err)
        }
    };
    async delete() {
        fs.unlink(`./productos.txt`, err => {
            if (err) {
                console.log(`Oops! Couldn't delete file because it doesn't exists!`);
            } else {
                console.log(`productos.txt succesfully deleted!`);
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

TEST save() method
test.delete() 

*/