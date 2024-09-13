import express from 'express';
import { getClients, createClient, updateClientById, deleteClientById } from '../controllers/clientController.js';

const router = express.Router();

// Define client routes
router.get('/', getClients);
router.post('/', createClient);
router.put('/:id', updateClientById);
router.delete('/:id', deleteClientById);

export default router;