const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

// Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'homepage_1.html'));
});

// Serve all assets and nested files
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.use('/vendor', express.static(path.join(__dirname, '..', 'vendor')));

// Optional: If homepage_1.html refers to assets without a path prefix
app.use(express.static(path.join(__dirname, '..'))); // Allows direct reference to homepage_1.html and others

// Start server and open browser
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  exec(`start http://localhost:${PORT}`);
});
