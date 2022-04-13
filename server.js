const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.listen(port);

app.get('/', (req, res) => {
    res.send ('Hello World');
});

console.log(`Server started on http://localhost:${port}`)