import fs from 'fs'
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let hours = today.getHours();
let minutes = String(today.getMinutes()).padStart(2, '0');
let seconds = today.getSeconds();
let filePath = 'fyh.txt'

today = `This file was written ${dd}/${mm}/${yyyy} ${hours}:${minutes}:${seconds}`;

try {
    fs.writeFileSync(filePath, today);
    console.log(fs.readFileSync(filePath, 'utf-8'));
} catch (error) {
    console.log(error);
};