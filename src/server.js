import express from 'express';
import taskRoutes from './routes/taskRoutes.js';
import clientRoutes from './routes/clientRoutes.js'; // Include .js extension

const app = express();
const port = 3000;

app.use(express.json());

// Mount routes with prefixes
app.use('/tasks', taskRoutes);  // Routes will be available under /tasks
app.use('/clients', clientRoutes);  // Routes will be available under /clients

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
