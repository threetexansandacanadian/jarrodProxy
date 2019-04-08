'user strict';

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;
const HOST = 'localhost';

app.use(express.static('public'));
app.use(cors());

app.listen(PORT)
console.log(`Running on http://${HOST}:${PORT}`);

