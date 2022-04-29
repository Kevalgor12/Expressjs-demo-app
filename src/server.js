const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
let port = process.env.port;

app.use(bodyparser.json());
app.get('/', (req, res) => {
    res.send('hello friends!!!, welcome to our blog site.')
})
app.listen(port, () => console.log(`Express App is running at http://localhost:${port}`));

module.exports = app; 