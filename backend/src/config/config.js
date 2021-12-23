import { config } from 'dotenv';

config()

const configuration = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/crud-mern'
}

export default configuration
