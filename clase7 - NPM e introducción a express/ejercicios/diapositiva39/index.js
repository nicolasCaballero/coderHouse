import express from 'express';
const app = express();
const port = 8080;
const server = app.listen(port, () => {
    console.log(`Server initialized on port http://localhost:${server.address().port}`);
});
server.on(`error`, error => console.log(`Server error ${error}`));

app.get('/', (req, res) => {
    res.json({msg: `Hey!`});
});

let date = Date.now();
app.get('/fyh', (req, res) => {
    res.json(date)
});
/* 11/1/2021 11:36:04 */