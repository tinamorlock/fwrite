// src/server.js
const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const clientRoutes = require('./routes/clientRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use(taskRoutes);
app.use(clientRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
