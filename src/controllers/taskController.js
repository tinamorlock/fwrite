const { getAllTasks, addTask, updateTask, deleteTask } = require('../models/task');

// Get all tasks
const getTasks = (req, res) => {
    getAllTasks()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Create a new task
const createTask = (req, res) => {
    const newTask = {
        task: req.body.task,
        client_id: req.body.client_id,  // Now referencing client_id
        deadline: req.body.deadline,
        wordCountGoal: req.body.wordCountGoal,
        status: req.body.status || 'In Progress',
        paymentStatus: req.body.paymentStatus || 'Pending'
    };

    addTask(newTask)
        .then(task => res.status(201).json(task))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Update a task by ID
const updateTaskById = (req, res) => {
    const updatedTask = {
        task: req.body.task,
        client_id: req.body.client_id,  // Updated with client_id
        deadline: req.body.deadline,
        wordCountGoal: req.body.wordCountGoal,
        status: req.body.status,
        paymentStatus: req.body.paymentStatus
    };

    updateTask(req.params.id, updatedTask)
        .then(task => res.json(task))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Delete a task by ID
const deleteTaskById = (req, res) => {
    deleteTask(req.params.id)
        .then(() => res.status(204).send())
        .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = { getTasks, createTask, updateTaskById, deleteTaskById };
