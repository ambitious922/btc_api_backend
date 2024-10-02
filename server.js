const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Example of a REST API endpoint
app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received', data });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});