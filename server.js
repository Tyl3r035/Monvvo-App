// server.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve specific files
app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'privacy-policy.html'));
});

app.get('/monvvo-disclaimer', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'monvvo-disclaimer.html'));
});

app.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'sitemap.xml'));
});

// Serve index.html for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Handle 404 by serving the 404.html page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'dist', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
