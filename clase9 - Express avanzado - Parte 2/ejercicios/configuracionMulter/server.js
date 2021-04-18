const express = require('express');
const app = express();
const port = 3636;
const multer = require('multer');
const server = app.listen(port, () => {
    console.log(`Server initialized on port http://localhost:${server.address().port}`);
});
app.use(express.urlencoded({
    extended: true
}));
server.on(`error`, error => console.log(`Server error ${error}`));
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, 'uploads');},
    filename: (req, file, cb) => { cb(null, file.fieldname + '-' + Date.now() + '.jpg');}
});

const upload = multer({ storage: storage });
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file;
    if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error)
    };
    res.sendFile(__dirname + '/uploads/' + file.filename);
});

app.post('/uploadmultiple', upload.array('myFiles', 13), (req, res, next) => {
    const files = req.file;
    if (!files) {
        const error = new Error('Please choose files');
        error.httpStatusCode = 400;
        return next(error)
    };
    res.sendFile(__dirname + '/uploads/');
});