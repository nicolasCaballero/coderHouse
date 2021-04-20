const express = require('express');
const app = express();
const port = 3535;
const server = app.listen(port, () => {console.log(`Server initialized on port http://localhost:${server.address().port}`);});
const testRoute = require('./routes/testRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/test', testRoute);
server.on(`error`, error => console.log(`Server error ${error}`));