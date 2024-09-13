const express = require('express');
const { getClients, createClient, updateClientById, deleteClientById } = require('../controllers/clientController');

const router = express.Router();

// Define client routes
router.get('/clients', getClients);
router.post('/clients', createClient);
router.put('/clients/:id', updateClientById);
router.delete('/clients/:id', deleteClientById);

module.exports = router;
