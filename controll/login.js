var express = require('express');
var path = require('path');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var express = require('express');
var router = express.Router()
var key = "whitehouse"
var app = express();
var user = require('../modal/user')

router.get('/log_in', (req, res) => {

    console.log('login called')
    var new_db = "mongodb://localhost:27017/info";
    mongo.connect(new_db, function(error, db) {
        if (error) {
            throw error;
        } else
            console.log("connected", )
        var password = user.getHash(req.query.password, key)
        var query = { email: req.query.email, password: password }
        db.collection("details").findOne(query, function(err, result) {
            if (result) {
                if (req.query.email == "abhishek@gmail")
                    return res.redirect('./public/main.html')
                else
                    return res.redirect('./public/display.html')
            } else
                res.status(200).send("incorrect password or email")

        })
    })


})


module.exports = router