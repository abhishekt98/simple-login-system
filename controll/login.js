var path = require('path');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var express = require('express');
var router = express.Router()

var app = express();


router.get('/log_in', (req, res) => {



    var new_db = "mongodb://localhost:27017/database_name";
    mongo.connect(new_db, function(error, db) {
            if (error) {
                throw error;
            } else
                console.log("connected")



        })
        //res.send("login called")
    console.log(req.query.email)
    console.log(req.query.password)
    res.end()
})


module.exports = router