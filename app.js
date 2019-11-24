var express = require('express');
var path = require('path');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var express = require('express');
var app = express();


app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.get('/', function(req, res) {
    /*res.set({
        'Access-Control-Allow-Origin': '*'
    });*/
    return res.redirect('/public/index.html');
}).listen(3000);
console.log("Server listening at : 3000");

var register = require('./controll/register')
app.post('/sign_up', register)

var login = require('./controll/login')
app.get('/log_in', login)