const express = require('express');
const router = express.Router();
const personas = require('../personas.json');

router.get('/', (req, res) => {
    res.json(personas);
});
router.post('/', (req, res) => {
    let newPersona = {
        id: personas.length = 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
    };
    fs.writeFileSync('./personas.json', JSON.stringify(newPersona, null, 1));
    res.json(`${newPersona.nombre} creada!`);
});
module.exports = router;