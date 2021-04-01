const fs = require('fs');

let packageJson = fs.readFileSync('../package.json', 'utf-8');
let stats = fs.statSync('../package.json');
let fileSize = stats.size;

/* Ejercicio A) */
let info = {
    contenidoStr: packageJson,
    contenidoObj: JSON.parse(packageJson),
    size: `${fileSize} bytes`
};
/* Ejercicio B) */
console.log(info);