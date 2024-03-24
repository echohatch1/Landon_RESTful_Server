const express = require('express');
const app = express();

// Import any additional modules you need (e.g., body-parser, mongoose)
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./api/models/products.model'); // Assuming your product model

// Database connection logic (if applicable)
mongoose.Promise = global.Promise;
const mongodbPassword = process.env.MONGO_PASSWORD; // Assuming you use environment variables

mongoose.connect(`mongodb+srv://echohatch1:${mongodbPassword}@cluster0.lgu6nng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, 
{ useNewUrlParser: true });

// Middleware setup (e.g., body-parser)
app.use(bodyParser.json());

// Your existing route definitions from index.js
app.get('/', (req, res) => {
  res.send("<h1>Welcome to my products API</h1>")
});

// ... other routes for your API

// Export the configured Express app
module.exports = app;