const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = express.Router();
var app = express();
const bodyparser = require('body-parser');
let port = process.env.port;

app.use(express.static("public"));
app.use('/css', express.static(__dirname + 'public/css'));
app.use(bodyparser.json());
app.set('view engine', 'ejs');
app.use('/', router);
app.get('/', (req, res) => {
    res.render('pages/login');
})
app.listen(port, () => console.log(`Express App is running at http://localhost:${port}`));

module.exports = router; 