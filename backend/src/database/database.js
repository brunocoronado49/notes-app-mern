import mongoose from 'mongoose';
import configuration from '../config/config.js';

(async () => {
    try {
        const database = await mongoose.connect(configuration.MONGODB_URI);
        console.log(configuration.MONGODB_URI)
        console.log('Database connected in: ', database.connection.host)
    } catch (error) {
        console.error(error);
    }
})()

