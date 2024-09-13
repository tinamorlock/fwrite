import { getAllTasks, addTask, updateTask, deleteTask, getTasksByClientID } from '../models/task.js';

// Get all tasks
export const getTasks = (req, res) => {
    getAllTasks()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Get tasks by client ID

export const fetchTasksByClientID = async (req, res) => {
    const { clientID } = req.params;

    try {
        const tasks = await getTasksByClientID(clientID);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Create a new task
export const createTask = (req, res) => {
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
export const updateTaskById = (req, res) => {
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
export const deleteTaskById = (req, res) => {
    deleteTask(req.params.id)
        .then(() => res.status(204).send())
        .catch(err => res.status(500).json({ error: err.message }));
};
