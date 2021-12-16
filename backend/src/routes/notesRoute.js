import { Router } from 'express';
import notesController from '../controllers/notesController.js';

const router = Router();

router.get('/notes', notesController.getNotes)

router.post('/notes/add', notesController.addNote)

router.get('/notes/edit/:id', notesController.editNote)

router.put('/notes/update/:id', notesController.updateNote)

router.delete('/notes/delete/:id', notesController.DeleteNote)

export default router

