const notesController = {}
import Note from '../models/Note.js';

notesController.getNotes = async (req, res) => {
   const notes = await Note.find()
   res.json(notes)
}

notesController.addNote = async (req, res) => {
    const { title, description, date, author} = req.body
    const newNote = new Note({
        title: title,
        description: description,
        date: date,
        author: author
    })
    await newNote.save()
    res.json('New note added!')
}

notesController.editNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.json(note)
}

notesController.updateNote = async (req, res) => {
    const { title, description, date, author} = req.body
    await Note.findByIdAndUpdate(req.params.id, {
        title: title,
        description: description,
        author: author,
        date: date
    })
    res.json('New note updated!')
}

notesController.DeleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json('New note deleted!')
}


export default notesController
