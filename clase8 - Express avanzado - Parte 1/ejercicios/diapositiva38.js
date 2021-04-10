import express from 'express';

const app = express();
const port = 3131;
const server = app.listen(port, () => {
    console.log(`Server initialized on port http://localhost:${server.address().port}`);
});
server.on(`error`, error => console.log(`Server error ${error}`));

const frase = 'Hola mundo como están';
/* EJERCICIO 1) */
app.get('/api/getFrase', (req, res) => {
    res.send(`<h1>${frase}</h1>`);
});

/* EJERCICIO 2) */
app.get('/api/getLetra/:num', (req, res) => {
    if (req.params.num <= frase.length) {
        let plusOne = parseInt(req.params.num) - 1
        res.send(`La letra en la posición <strong>${req.params.num}</strong> de la frase '<strong>${frase}</strong>' es la letra 
        <h1>${frase[plusOne]}</h1>`);
    } else if (req.params.num > frase.length) {
        res.json({
            error: `El parámetro está fuera de rango. Ingrese un número entre 1 y ${frase.length}`
        });
    } else if (req.params.num !== `number`) {
        res.json({
            error: `'${req.params.num}' No es un dato valido. Ingrese un número entre 1 y ${frase.length}`
        });
    };
});

/* EJERCICIO 3) */
app.get('/api/getPalabra/:num', (req, res) => {
    let phrase1 = frase[0] + frase[1] + frase[2] + frase[3];
    let phrase2 = frase[5] + frase[6] + frase[7] + frase[8] + frase[9];
    let phrase3 = frase[11] + frase[12] + frase[13] + frase[14];
    let phrase4 = frase[16] + frase[17] + frase[18] + frase[19] + frase[20];

    if (req.params.num == 1) {
        res.send(`La palabra ubicada en la posición <strong>1</strong> de la frase '<strong>${frase}</strong>' es 
        <h1>${phrase1}</h1>`);
    } else if (req.params.num == 2) {
        res.send(`La palabra ubicada en la posición <strong>2</strong> de la frase '<strong>${frase}</strong>' es 
        <h1>${phrase2}</h1>`);
    } else if (req.params.num == 3) {
        res.send(`La palabra ubicada en la posición <strong>3</strong> de la frase '<strong>${frase}</strong>' es 
        <h1>${phrase3}</h1>`);
    } else if (req.params.num == 4) {
        res.send(`La palabra ubicada en la posición <strong>4</strong> de la frase '<strong>${frase}</strong>' es 
        <h1>${phrase4}</h1>`);
    } else if (req.params.num > 4) {
        res.json({
            error: `El parámetro está fuera de rango. Ingrese un número entre 1 y 4`
        });
    } else if (req.params.num !== `number`) {
        res.json({
            error: `'${req.params.num}' No es un dato valido. Ingrese un número entre 1 y 4`
        });
    };
});