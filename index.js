const dbconnection = require('./src/db/dbconnection');
const express = require('express');
var app = express();
const router = express.Router();
const bodyparser = require('body-parser');