import fs, { read, readFile } from 'fs'
let obj = 
async function readFile() {
    try {
        let content = await fs.promises.readFile('../info.txt', 'utf-8');
        obj = content
    } catch (err) {
        console.log(`Oops! Coudn't read file!`, err);
    };
};
readFile()
console.log(obj);