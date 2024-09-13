// routes/taskRoutes.js
const express = require('express');
const { getTasks, createTask, updateTaskById, deleteTaskById } = require('../controllers/taskController');

const router = express.Router();

// Define routes
router.get('/writing-tasks', getTasks);
router.post('/writing-tasks', createTask);
router.put('/writing-tasks/:id', updateTaskById);
router.delete('/writing-tasks/:id', deleteTaskById);

module.exports = router;
