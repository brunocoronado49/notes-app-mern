import express from 'express';
const app = express();

import cors from 'cors'; 
// Este lo usamos para la conexion de dos servidores e intercambien informacion

import configuration from './config/config.js';

// settings
app.set('port', configuration.PORT)

// Middleware configuration
app.use(cors())
app.use(express.json())

// Routes configuration
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/notes', (req, res) => {
    res.send('Hello Notes')
})

export default app
