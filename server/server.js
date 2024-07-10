const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Include CORS middleware

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')));

// MongoDB connection
const MONGODB_URI = 'mongodb://localhost:27017/myresume'; // Replace with your MongoDB URI
mongoose.connect(process.env.MONGODB_URI || MONGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Mongoose schema and model
const FormDataSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    query: { type: String }
});

const FormData = mongoose.model('FormData', FormDataSchema);

// POST endpoint to handle form data submission
app.post('/api/formdata', async (req, res) => {
    try {
        const { username, email, query } = req.body;

        // Create a new FormData document
        const newFormData = new FormData({
            username,
            email,
            query
        });

        // Save the document to MongoDB
        await newFormData.save();

        res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
