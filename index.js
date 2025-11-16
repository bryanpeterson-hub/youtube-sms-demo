const express = require('express');
const path = require('path');
const app = express();

// Heroku provides the port via an environment variable.
const PORT = process.env.PORT || 3000;

// This is the main part:
// When someone visits the root URL ('/'),
// send them the 'youtube_demo.html' file.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'youtube_demo.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Demo server listening on port ${PORT}`);
});
