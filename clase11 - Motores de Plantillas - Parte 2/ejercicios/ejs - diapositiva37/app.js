const express = require('express');
const app = express();
const port = 8080;
const server = app.listen(port, () => {console.log(`Server initialized on port http://localhost:${server.address().port}`);});
const fs = require('fs');
const personas = JSON.parse(fs.readFileSync('./personas.json'));

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
server.on(`error`, error => console.log(`Server error ${error}`));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
     res.render('../views/index', {personas: personas});
});
app.post('/datos', (req, res) => {
    let newPersona = {
        id: personas.length + 1,
        name: req.body.name,
        lastName: req.body.lastName,
        age: parseInt(req.body.age)
    };
    personas.push(newPersona);
    fs.writeFileSync('./personas.json', JSON.stringify(personas, null, 1));
    res.redirect('/')
});