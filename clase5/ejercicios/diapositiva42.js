const http = require(`http`);
const date = new Date();
const morning = date.getHours() >= 6 && date.getHours() <= 12;
const afternoon = date.getHours() >= 13 && date.getHours() <= 19;
const night = date.getHours() >= 20 && date.getHours() <= 5;

const server = http.createServer((req, res) => {
    if (morning) {
        res.end(`Buenos días!
Son las ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    } else if (afternoon) {
        res.end(`Buenas tardes!
Son las ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    } else if (night) {
        res.end(`Buenas noches! 
Son las ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    };
});

server.listen(8080, () => {
    console.log(`Server ready to run on port http://localhost:8080`);
});