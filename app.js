var http = require('http');
var express  = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//define routes
app.use(require('./email'));
app.use(require('./emailSendCronJob'));


//start the server
app.listen(1338,function () {
    console.log('done')
})