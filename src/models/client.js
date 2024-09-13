// src/models/client.js
const pool = require('../db');

// Get all clients
const getAllClients = async () => {
    const res = await pool.query('SELECT * FROM clients');
    return res.rows;
};

// Add a new client
const addClient = async (client) => {
    const res = await pool.query(
        'INSERT INTO clients (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
        [client.name, client.email, client.phone]
    );
    return res.rows[0];
};

// Update a client by ID
const updateClient = async (id, updatedClient) => {
    const res = await pool.query(
        'UPDATE clients SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *',
        [updatedClient.name, updatedClient.email, updatedClient.phone, id]
    );
    return res.rows[0];
};

// Delete a client by ID
const deleteClient = async (id) => {
    await pool.query('DELETE FROM clients WHERE id = $1', [id]);
};

module.exports = { getAllClients, addClient, updateClient, deleteClient };