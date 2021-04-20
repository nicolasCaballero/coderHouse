const express = require('express');
const app = express();
const port = 3434;
const server = app.listen(port, () => {console.log(`Server initialized on port http://localhost:${server.address().port}`);});
const productRoutes = require('./routes/products');
const methodOverride = require('method-override');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
server.on(`error`, error => console.log(`Server error ${error}`));


app.use('/api', productRoutes);