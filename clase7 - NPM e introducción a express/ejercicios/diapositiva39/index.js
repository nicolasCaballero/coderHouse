import express from 'express';
import fs from 'fs';

const app = express();
const port = 8080;
const server = app.listen(port, () => {
    console.log(`Server initialized on port http://localhost:${server.address().port}`);
});
server.on(`error`, error => console.log(`Server error ${error}`));

/* EJERCICIO A) */
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Express Server!</h1> <style>h1{color:blue}</style>');
});

/* EJERCICIO B) */
app.get('/visitas', (req, res) => {
    let file = fs.readFile('./visitas.txt', 'utf-8', (err, cont) => {

        if (err) {

            let newFile = [{
                "times": 1
            }];

            res.send(`You're the first person ever to visit this page! Congrats!`);
            fs.writeFileSync('./visitas.txt', JSON.stringify(newFile, null, 1));
        } else {

            let parsedJSON = JSON.parse(cont);
            let timesVisited = parsedJSON[0].times + 1;
            res.send(`This page had been visited ${timesVisited} times!`);
            parsedJSON[0].times = parsedJSON[0].times + 1;
            fs.writeFileSync('./visitas.txt', JSON.stringify(parsedJSON, null, 1));
        };
    });
});

/* EJERCICIO C) */
app.get('/fyh', (req, res) => {
    let date = new Date();
    res.send(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
});