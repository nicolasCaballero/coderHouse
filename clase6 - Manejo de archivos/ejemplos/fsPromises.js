import fs from 'fs'
/* Leer archivo usando sintaxis then/catch */

fs.promises.readFile('../diapositiva.txt', 'utf-8')
    .then(content => {
        console.log(content);
    })
    .catch(err => {
        console.log(`Oops! Coudn't read file!`, err);
    });

/* Leer archivo usando sintaxis async/await */
async function readFile() {
    try {
        const content = await fs.promises.readFile('../diapositiva.txt', 'utf-8');
        console.log(content);
    } catch (error) {
        console.log(`Oops! Coudn't read file!`, err);
    };
};

readFile();

/* Sobreescribir un archivo */

async function writeFile() {
    try {
        fs.promises.writeFile('../diapositiva.txt', 'https://docs.google.com/presentation/d/1E23oqU9J5eNAyDpLRJN-yHQy3hqOV2hPND4rubysL4Q/preview?slide=id.g887edb21d4_1_6');
        console.log(`overwritten!`);
    } catch (error) {
        console.log(`Oops! Coudn't read file!`, error)
    };
};
writeFile();

/* Agregar comentarios a un archivo */

async function appendFile() {
    try {
        fs.promises.appendFile('../diapositiva.txt', 'https://docs.google.com/presentation/d/1E23oqU9J5eNAyDpLRJN-yHQy3hqOV2hPND4rubysL4Q/preview?slide=id.g887edb21d4_1_6');
        console.log(`updated!`);
    } catch (error) {
        console.log(`Oops! Coudn't read file!`, error)
    };
};
appendFile();