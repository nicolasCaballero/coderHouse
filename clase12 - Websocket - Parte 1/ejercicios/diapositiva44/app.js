const express = require('express');
const app = express();
const port = 3434;
const server = app.listen(port, () => {console.log(`Server initialized on port http://localhost:${server.address().port}`);});
const mainRoutes = require('./routes/main');
const { Server } = require('socket.io');
const io = new Server(server);

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mensajes = [];
io.on('connection', socket => {
    console.log('¡New Client Connected!')
    socket.emit('mensajes', mensajes)
    socket.on('mensaje', data => {
        mensajes.push({ socketid: socket.id, mensaje: data })
        io.sockets.emit('mensajes', mensajes)
    })
})
server.on(`error`, error => console.log(`Server error ${error}`));
app.use('/', mainRoutes);