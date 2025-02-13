const express = require('express');
const path = require('path');
const app = express();
const port = 3500;

// Serve static files like images, css, and audio from the public folder
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/audio', express.static(path.join(__dirname, 'public/audio')));

// Serving index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serving sample.html
app.get('/sample.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'sample.html'));
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
