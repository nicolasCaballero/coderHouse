import fs from 'fs';

fs.promises.readFile('../info.txt', 'utf-8')
    .then(cont => {
        /* EJERCICIO A) */
        let info = JSON.parse(cont);
        /* EJERCICIO B) */
        console.log(info);
        /* EJERCICIO C) */
        info.contenidoObj.author = `CoderHouse`
        async function writeFile() {
            try {
                fs.promises.writeFile('../package.json.coder', JSON.stringify(info.contenidoObj, null, '\t'));
                console.log(`File succesfully writen!`);
            } catch (error) {
                console.log(`Oops! Coudn't write file!`, error)
            };
        };
        writeFile();
    })
    .catch(err => {
        console.log(`Oops! Coudn't read file!`, err);
    });