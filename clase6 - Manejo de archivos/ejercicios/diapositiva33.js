import fs from 'fs';

let packageJson = fs.readFileSync('../package.json', 'utf-8');
let stats = fs.statSync('../package.json');
let fileSize = stats.size;

/* Ejercicio A) */
let info = {
    contenidoStr: JSON.stringify(JSON.parse(packageJson)),
    contenidoObj: JSON.parse(packageJson),
    size: `${fileSize} bytes`
};
/* Ejercicio B) */
console.log(info);

/* Ejercicio C) */
fs.writeFileSync('../info.txt', JSON.stringify(info, null, 1).replace(/\\/g, ""), error => {
    if (error) {
        console.log(`Oops! Couldn't rewrite file`);
    } else {
        console.log(`Sync File succesfully created!`);
    };
});