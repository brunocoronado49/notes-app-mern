import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    }
}, { timestamps: true })

export default mongoose.model('User', UserSchema)