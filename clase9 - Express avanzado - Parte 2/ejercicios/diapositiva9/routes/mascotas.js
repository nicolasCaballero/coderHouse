const express = require('express');
const router = express.Router();
const fs = require('fs');
const mascotas = require('../mascotas.json');

router.get('/', (req, res) => {
    res.json(mascotas);
});
router.post('/', (req, res) => {
    let newMascota = {
        id: mascotas.length = 1,
        nombre: req.body.nombre,
        raza: req.body.raza,
        edad: req.body.edad,
    };
    fs.writeFileSync('./mascotas.json', JSON.stringify(newMascota, null, 1));
    res.json(`${newMascota.nombre} creada!`);
});
module.exports = router;
