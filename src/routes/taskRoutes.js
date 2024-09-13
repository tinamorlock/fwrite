import express from 'express';
import { getTasks, createTask, updateTaskById, deleteTaskById } from '../controllers/taskController.js';

const router = express.Router();

// Define routes
router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTaskById);
router.delete('/:id', deleteTaskById);

export default router;