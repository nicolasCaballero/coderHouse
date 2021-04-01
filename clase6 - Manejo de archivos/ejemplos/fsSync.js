const fs = require('fs');
let path = 'syncFile.txt'
let syncFile = `hello`;

fs.writeFileSync(path, syncFile, error => {
    if (error) {
        console.log(`Oops! Couldn't rewrite file`);
    } else {
        console.log(`Sync File succesfully created!`);
    };
});

fs.appendFile(path, ' newText', error => {
    if(error) {
        console.log(`Oops! Couldn't append the text!`);
    } else {
        console.log(`Sync File succesfully updated!`);
    };
});

fs.readFile(path, 'utf-8', (error, content) => {
    if (error) {
        console.log(`Opps! File not found.`);
    } else {
        console.log(`Sync File succesfully readed!: ${content}`);
    };
});

fs.unlink(path, error => {
    if(error) {
        console.log(`Oops! Couldn't delete file`);
    } else {
        console.log(`Sync File succesfully deleted!`);
    };
});