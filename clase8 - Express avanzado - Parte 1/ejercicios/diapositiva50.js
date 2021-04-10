import express from 'express';

const app = express();
const port = 3232;
const server = app.listen(port, () => {
    console.log(`Server initialized on port http://localhost:${server.address().port}`);
});
server.on(`error`, error => console.log(`Server error ${error}`));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/* EJERCICIO 1-A) */
app.get(`/api/sumar/:n1/:n2`, (req, res) => {
    res.send(`${req.params.n1} + ${req.params.n2} = ${parseInt(req.params.n1) + parseInt(req.params.n2)}`);
});

/* EJERCICIO 1-B) */
app.get(`/api/:num`, (req, res) => {
    res.send(`${req.query.num1} + ${req.query.num2} = ${parseInt(req.query.num1) + parseInt(req.query.num2)}`);
});

/* EJERCICIO 1-C) */
app.get(`/api/operacion/:num`, (req, res) => {
    let parameter = req.params.num
    let splittedParameter = parameter.split(`+`);
    res.send(`${splittedParameter[0]} + ${splittedParameter[1]} = ${parseInt(splittedParameter[0]) + parseInt(splittedParameter[1])}`);
});

/* EJERCICIO 2) */
app.post(`/api`, (req, res) => {
    res.send(`Ok post`);
});

app.put(`/api`, (req, res) => {
    res.send(`Ok put`);
});

app.delete(`/api`, (req, res) => {
    res.send(`Ok delete`);
});