const http = require(`http`);
const server = http.createServer((req, res) => {

    let randomNumber = Math.round(Math.random() * (10 - 0) + 0);
    let newObj = JSON.stringify({
        id: randomNumber,
        title: `Producto ${randomNumber}`,
        price: +(Math.round((Math.random() * (9999.99 - 0) + 0) + `e+2`) + `e-2`),
        thumbnail: `fotoProducto${randomNumber}.jpg`
    });
    res.end(newObj);

});

server.listen(7777, () => {
    console.log(`Server ready to run on port http://localhost:7777`);
});