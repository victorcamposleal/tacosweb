const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
});

// Handle the form submission
app.post('/send-email', (req, res) => {
    console.log(req.body); // Log the incoming data
    const { name, email, subject, message } = req.body;

    // Check if required fields are present
    if (!name || !email || !subject || !message) {
        return res.status(400).send('All fields are required');
    }

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tacosnortenos2022@gmail.com',
            pass: 'iqbj xwps rwlx uzak'  // Use an App Password for Gmail if 2FA is enabled
        }

       
    });

    // Set up email options
    let mailOptions = {
        from: 'tacosnortenos2022@gmail.com',
        to:  email, // Recipient's email
        subject:  `${subject} - de ${name}`, // Email subject
        text: `${message} \n\-------------------------\n\ Gracias por tu mensaje. Nos pondremos en contacto contigo.` // Email body
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent: ' + info.response);
        res.send('Email successfully sent');
    });
});

//get reviews

app.get('/api/reviews', async (req, res) => {
    try {
        const response = await axios.get('https://es.restaurantguru.com/Tacos-Nortenos-Limpias/reviews?bylang=1');
        res.send(response.data);  // Send the response to the frontend
    } catch (error) {
        res.status(500).send('Error fetching reviews');
    }
});

// Start the server

module.exports = app;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

