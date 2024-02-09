// Import required modules
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const data = require('./data')
const app = express();

app.use(cors());

// Define a route to return the JSON data
app.get('/api/menu', (req, res) => {
  res.json(data);
});

// Start the server
const port = process.env.MYPORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
