const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Routes for static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'privacy-policy.html'));
});

app.get('/disclaimer', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'monvvo-disclaimer.html'));
});

// Dynamic route to handle additional static pages
app.get('/:page', (req, res) => {
    const pagePath = path.join(__dirname, 'dist', `${req.params.page}.html`);
    res.sendFile(pagePath, (err) => {
        if (err) {
            res.status(404).sendFile(path.join(__dirname, 'dist', '404.html'));
        }
    });
});

// Email sending route
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    // Configure Nodemailer with Zoho SMTP settings
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true, // Use SSL
        auth: {
            user: process.env.ZOHO_EMAIL, // Environment variable for Zoho email
            pass: process.env.ZOHO_PASSWORD, // Environment variable for Zoho app password
        },
    });

    const mailOptions = {
        from: email,
        to: 'info@monvvo.com', // Your recipient email
        subject: subject || 'No Subject',
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

// 404 Error handling
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'dist', '404.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
