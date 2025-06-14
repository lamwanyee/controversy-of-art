const express = require('express');
const path = require('path');
const { exec } = require('child_process'); // Built-in, no install needed

const app = express();
const PORT = 3000;

// Serve homepage HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'homepage_1.html'));
});

// Serve assets and vendor folders
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.use('/vendor', express.static(path.join(__dirname, '..', 'vendor')));

// Start server and open browser
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  exec(`start http://localhost:${PORT}`); 
});
