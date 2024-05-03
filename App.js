const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Handle registration endpoint
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    // Here you can implement your logic to save the user data to a database
    // For demonstration purposes, we'll just log the data
    console.log('New user registered:', { username, email, password });
    res.json({ message: 'Registration successful' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
