const express = require('express');
const app = express();
const port = 3535;
const server = app.listen(port, () => {console.log(`Server initialized on port http://localhost:${server.address().port}`);});
const handlebars = require('express-handlebars');
app.engine(
    'hbs',
    handlebars({
        extname: 'hbs',
        defaulLayout: 'index.hbs',
        layoutsDir: __dirname + '/views',
        partialsDir: __dirname + '/views/partials'
    })
);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('main', {
        title: 'a title',
        msg: 'a msg',
        author: 'nicolasCaballero',
        version: '1.3',
        test: 'asdad'
    });
})
server.on(`error`, error => console.log(`Server error ${error}`));  