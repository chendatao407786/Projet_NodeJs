const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
});
const url = 'mongodb://localhost:27017/test';
mongoose
    .connect(url)
    .then(() => console.log('connected'))
    .catch(err => console.log(err));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('server started at '+port));