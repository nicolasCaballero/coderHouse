const express = require('express');
const app = express();
const port = 8080;
const server = app.listen(port, () => {console.log(`Server initialized on port http://localhost:${server.address().port}`);});
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
server.on(`error`, error => console.log(`Server error ${error}`));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/datos', (req, res) => {
    let params = {
        min: req.query.min,
        nivel: req.query.nivel,
        max: req.query.max,
        titulo: req.query.titulo,
    };
    res.render('../views/datos', {params: params});
});
