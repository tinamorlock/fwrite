import express from 'express';
import { getTasks, createTask, updateTaskById, deleteTaskById, fetchTasksByClientID } from '../controllers/taskController.js';

const router = express.Router();

// Define routes
router.get('/', getTasks);
router.get('/client/:clientID', fetchTasksByClientID);
router.post('/', createTask);
router.put('/:id', updateTaskById);
router.delete('/:id', deleteTaskById);

export default router;