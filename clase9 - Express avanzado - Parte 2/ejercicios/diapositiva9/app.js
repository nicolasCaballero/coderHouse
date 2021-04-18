const express = require('express');
const app = express();
const port = 3535;
const server = app.listen(port, () => {console.log(`Server initialized on port http://localhost:${server.address().port}`);});
const mascotasRoutes = require('./routes/mascotas');
const personasRoutes = require('./routes/personas');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
server.on(`error`, error => console.log(`Server error ${error}`));


app.use('/mascotas', mascotasRoutes);
app.use('/personas', personasRoutes);