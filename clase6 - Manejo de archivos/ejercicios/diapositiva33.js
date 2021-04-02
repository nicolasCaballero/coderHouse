import fs from 'fs';

const stats = fs.statSync('../package.json');
const fileSize = stats.size;

/* Ejercicio A) */
fs.readFile('../package.json', 'utf-8', (err, cont) => {
    if (err) {
        console.log(`Opps! File not found.`);
    } else {
        const info = {
            contenidoStr: JSON.stringify(JSON.parse(cont)),
            contenidoObj: JSON.parse(cont),
            size: `${fileSize} bytes`
        };
        /* Ejercicio C) */
        fs.writeFile('../info.txt', JSON.stringify(info, null, 1), error => {
            if (error) {
                console.log(`Oops! Couldn't rewrite file`);
            } else {
                console.log(`Sync File succesfully created!`);
            };
        });
        /* Ejercicio B) */
        console.log(info);
    };

});