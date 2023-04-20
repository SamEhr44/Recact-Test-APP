const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const request = require('request');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.timeout = 0;

const port = 5000;

app.listen(port,()=> console.log("port 5000"));