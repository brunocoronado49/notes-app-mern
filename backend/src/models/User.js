import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    }
}, { timestamps: true })

export default model('User', UserSchema)