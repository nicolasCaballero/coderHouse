import express from 'express';

const app = express();
const port = 3333;
const server = app.listen(port, () => {
    console.log(`Server initialized on port http://localhost:${server.address().port}`);
});
server.on(`error`, error => console.log(`Server error ${error}`));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const frase = 'Frase inicial';

/* EJERCICIO 1) */
app.get(`/api/frase`, (req, res) => {
    res.send(`<h1>${frase}<h1>`);
});

/* EJERCICIO 2) */
app.get(`/api/palabras/:position`, (req, res) => {
    let position = req.params.position;
    let phrase = frase.split(` `);
    res.send(`<h1>FRASE: ${frase} </H1> En la posicion <strong>${position}</strong>, esta la palabra <strong>${phrase[position - 1]}</strong>`);
});

/* EJERCICIO 3) */
app.post(`/api/palabras`, (req, res) => {
    let word = req.body.palabra;
    res.send(`FRASE ORIGINAL => ${frase}
     PALABRA AGREGADA => ${word}
     FRASE FINAL => ${frase} ${word}`);
});

/* EJERCICIO 4) */
app.put(`/api/palabras/:position`, (req, res) => {
    let position = req.params.position;
    let phrase = frase.split(` `);
    let newWord = req.body.palabra;
    if (position == 1) {
        res.send(`FRASE ORIGINAL => ${frase}
        POSICION ELEGIDA => ${position}
        PALABRA EN POSICION 1 => ${phrase[position - 1]}
        NUEVA PALABRA => ${newWord}
        FRASE ACTUALIZADA => ${phrase[0] = newWord} ${phrase[1]}`);
    } else {
        res.send(`FRASE ORIGINAL => ${frase}
        POSICION ELEGIDA => ${position}
        PALABRA EN POSICION 2 => ${phrase[position - 1]}
        NUEVA PALABRA => ${newWord}
        FRASE ACTUALIZADA => ${phrase[0]} ${phrase[1] = newWord}`);
    };
});

/* EJERCICIO 5) */
app.delete(`/api/palabras/:position`, (req, res) => {
    let phrase = frase.split(` `);
    if (req.params.position == 1) {
        res.send(`FRASE ORIGINAL => ${frase}
        POSICION ELEGIDA => 1
        PALABRA EN POSICION 1 A ELIMINAR => ${phrase[req.params.position - 1]}
        FRASE ACTUALIZADA => ${phrase[1]}`);
    } else {
        res.send(`FRASE ORIGINAL => ${frase}
        POSICION ELEGIDA => 2
        PALABRA EN POSICION 2 A ELIMINAR => ${phrase[req.params.position - 1]}
        FRASE ACTUALIZADA => ${phrase[0]}`);
    };
});