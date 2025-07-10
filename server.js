const express = require('express');
const path = require('path');
const app = express();

// Serve your HTML file at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Emscrptnwasm+js2html.html'));
});

// Serve all other static files in the directory (if any)
app.use(express.static(__dirname));

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}`));
