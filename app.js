const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(express.static('public'));

// Middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/send', async (req, res) => {
    const { email, purpose } = req.body;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'rny50265@gmail.com',
            pass: 'qrke jqyd rcnt xcoh'
        }
    });

    // Email options
    const mailOptions = {
        from: 'rny50265@gmail.com',  // Sender address
        to: 'rny50265@gmail.com',                     // List of recipients
        subject: 'Contact Submission // RAIDAR Demo',  // Subject line
        text: `Contact Email: ${email}; Purpose of Contact: ${purpose}`  // Plain text body
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
        console.log('Failed to send the email.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});