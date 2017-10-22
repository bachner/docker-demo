'use strict';

const express = require('express');

// Constants
const PORT = 6060;
const HOST = '0.0.0.0';
const os = require("os");
const hostname = os.hostname();

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Server\'s hostname: ' + hostname + '</h1><h2>Yeah baby!</h2>\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
