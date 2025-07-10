const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.get('/', (req, res) => res.sendFile(__dirname + '/Emscrptnwasm+js2html.html'));
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}`));
