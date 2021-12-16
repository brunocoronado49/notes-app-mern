import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: String,
    date: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true })

export default mongoose.model('Note', NoteSchema);