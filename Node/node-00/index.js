// Simple Node.js app with Express
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Node.js! 🚀');
});

app.get('/api/info', (req, res) => {
    res.json({
        message: 'This is a simple Express API',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(`📝 Visit http://localhost:${PORT}/api/info for JSON response`);
});
