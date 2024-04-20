// Import required modules
const express = require('express');
const path = require('path');

// Create an instance of Express
const app = express();

// Serve static files from the React.js build directory
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// Define API routes and other middleware here...

// Serve the React.js app on any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

// Set up the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
