import express from 'express';
const app = express();

import configuration from './config/config.js';

// settings
app.set('port', configuration.PORT)

// Middleware configuration

// Routes

export default app
