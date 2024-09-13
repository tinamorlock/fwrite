const { getAllClients, addClient, updateClient, deleteClient } = require('../models/client');

// Get all clients
const getClients = (req, res) => {
    getAllClients()
        .then(clients => res.json(clients))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Create a new client
const createClient = (req, res) => {
    const newClient = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };
    addClient(newClient)
        .then(client => res.status(201).json(client))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Update a client by ID
const updateClientById = (req, res) => {
    const updatedClient = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };
    updateClient(req.params.id, updatedClient)
        .then(client => res.json(client))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Delete a client by ID
const deleteClientById = (req, res) => {
    deleteClient(req.params.id)
        .then(() => res.status(204).send())
        .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = { getClients, createClient, updateClientById, deleteClientById };
