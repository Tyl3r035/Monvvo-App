// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 9000;

// // Serve static files from the dist directory
// app.use(express.static(path.join(__dirname, 'dist')));

// // Serve the index.html for the root path
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// // Serve the privacy-policy.html
// app.get('/privacy-policy', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'privacy-policy.html'));
// });

// // Serve the monvvo-disclaimer.html
// app.get('/disclaimer', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'monvvo-disclaimer.html'));
// });

// // Handle 404
// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'dist', '404.html'));
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the index.html for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Serve the privacy-policy.html
app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'privacy-policy.html'));
});

// Serve the monvvo-disclaimer.html
app.get('/disclaimer', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'monvvo-disclaimer.html'));
});

// Email sending route
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Configure Nodemailer with Zoho SMTP settings
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true, // Use SSL
        auth: {
            user: 'your-email@yourdomain.com', // Replace with your Zoho email
            pass: 'your-app-password', // Replace with your Zoho app-specific password
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

// Handle 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'dist', '404.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
