import { Router } from 'express';
import userController from '../controllers/userController.js';

const router = Router();

router.get('/user', userController.getUsers)

router.post('/user/add', userController.addUser)

router.delete('/user/delete/:id', userController.deleteUser)

export default router

