import pool from '../db.js';

// Get all tasks with client details
export const getAllTasks = async () => {
    const res = await pool.query(`
        SELECT tasks.id, tasks.task, tasks.deadline, tasks.wordCountGoal, tasks.status, tasks.paymentStatus, clients.name AS client
        FROM tasks
        LEFT JOIN clients ON tasks.client_id = clients.id
    `);
    return res.rows;
};

// Add a new task with a client ID
export const addTask = async (task) => {
    const res = await pool.query(
        'INSERT INTO tasks (task, client_id, deadline, wordCountGoal, status, paymentStatus) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [task.task, task.client_id, task.deadline, task.wordCountGoal, task.status, task.paymentStatus]
    );
    return res.rows[0];
};

// Update a task by ID
export const updateTask = async (id, updatedTask) => {
    const res = await pool.query(
        'UPDATE tasks SET task = $1, client_id = $2, deadline = $3, wordCountGoal = $4, status = $5, paymentStatus = $6 WHERE id = $7 RETURNING *',
        [updatedTask.task, updatedTask.client_id, updatedTask.deadline, updatedTask.wordCountGoal, updatedTask.status, updatedTask.paymentStatus, id]
    );
    return res.rows[0];
};

// Delete a task by ID
export const deleteTask = async (id) => {
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
};
