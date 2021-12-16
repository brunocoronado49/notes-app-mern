import express from 'express';
const app = express();

import morgan from 'morgan';
// Esto nos permite ver los metodos que se envian en la web
import cors from 'cors'; 
// Este lo usamos para la conexion de dos servidores e intercambien informacion

import configuration from './config/config.js';
// Importamos la configuracion que hicimos con las validaciones del port y database

import homeRoute from './routes/homeRoute.js'
import userRoute from './routes/userRoute.js'
import notesRoute from './routes/notesRoute.js'
// Importamos las rutas de la app

// settings
app.set('port', configuration.PORT)

// Middleware configuration
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// Routes configuration
app.use(homeRoute)
app.use(userRoute)
app.use(notesRoute)


export default app
