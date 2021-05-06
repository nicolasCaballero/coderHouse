import express, {Application, Request, Response} from 'express';

import Persona from './models/Persona'
import {getTime} from './lib/tiempo'

const app: Application = express();

app.get('/tiempo', (req: Request, res: Response) => {
    const persona: Persona = new Persona('Nicolas', 'Caballero')
    res.json({
        tiempo: getTime(),
        firma: persona.getFullName()
    });
});

const PORT: number = 8080;
const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});