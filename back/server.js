'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'almundo-back';

// App
const app = express();
app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);