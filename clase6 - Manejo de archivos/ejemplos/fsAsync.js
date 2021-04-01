const fs = require('fs');
let fileToWrite = `test`;
let fileToadd = ` added`

fs.writeFileSync('archivodentrodecarpetaejemplos.txt', fileToWrite);
fs.appendFileSync('archivodentrodecarpetaejemplos.txt', fileToadd);
let file = fs.readFileSync('archivodentrodecarpetaejemplos.txt', 'utf-8');
console.log(`File created: '${file}'`);
try {
    fs.unlinkSync('archivodentrodecarpetaejemplos.txt');
    console.log(`File deleted`);
} catch (error) {
    console.log(error);
}