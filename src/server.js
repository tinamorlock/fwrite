import express from 'express';
import dotenv from 'dotenv';
import pkg from 'pg';
import taskRoutes from './routes/taskRoutes.js';
import clientRoutes from './routes/clientRoutes.js';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const app = express();
const PORT = 3000;

// Ensure DB connection before starting server
async function startServer() {
    try {
        const res = await pool.query('SELECT 1'); // Test connection
        console.log('✅ Database connected');

        // Start server after successful DB connection
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('❌ Failed to connect to the database:', err.message);
        process.exit(1); // Exit the app if DB connection fails
    }
}

// for parsing request bodies
app.use(express.json());

// Mount routes with prefixes
app.use('/tasks', taskRoutes);
app.use('/clients', clientRoutes);

// Start the server after DB connection check
startServer();
