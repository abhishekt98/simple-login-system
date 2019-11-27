var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/info";
var express = require('express');
var path = require('path');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var express = require('express');
var router = express.Router()
var key = "whitehouse"
var app = express();

mongo.connect(new_db, function(error, db) {
    if (error) {
        throw error;
    }

    db.collection('details').findOne({}, (err, res) => {})

});

module.exports.getUserByEmail = function(email, callback) {

    console.log("Get User by email id enterd");
    query = {
        email: email
    }
    console.log(db.collection("details").findOne(query, callback));
};

module.exports.getUserByUserName = function(name, callback) {
    var query = {
        name: name
    };
    User.findOne(query, callback);
};


module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) {
            console.log("password didnt match");
            console.log("isMatch : ", isMatch);
        }
        console.log("isMacth :", isMatch);
        callback(null, isMatch);
    });
};

module.exports.getHash = (pass, key) => {
    // console.log("hashing")

    var hmac = crypto.createHmac('sha512', key);

    //passing the data to be hashed
    data = hmac.update(pass);
    //Creating the hmac in the required format
    gen_hmac = data.digest('hex');
    //Printing the output on the console
    //console.log("hmac : " + gen_hmac);
    return gen_hmac;
}

/*getUserByEmail("abhishekt14898@gmail.com", () => {
    console.log("error"), db
});*/