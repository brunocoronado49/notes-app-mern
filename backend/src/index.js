import app from './app.js'
import './database/database.js'
import configuration from './config/config.js';

app.listen(app.get('port') || 4000)
console.log(`Server on port: ${app.get('port')}`)
