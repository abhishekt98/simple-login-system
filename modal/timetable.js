var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

var express = require('express');
var app = express();
var router = express.Router()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

router.post('/time', (req, res) => {

    console.log('time called')
    var my_db = "mongodb://localhost:27017/info";

    MongoClient.connect(my_db, function(err, db) {
        if (err) throw err;

        var day = req.body.day;
        var hour = req.body.hour;
        var subject = req.body.subject;
        var faculty_name = req.body.faculty_name;


        var data = {


            "hour": hour,
            "subject": subject,
            "faculty_name": faculty_name

        }

        console.log("connected to database successfully");
        //CREATING A COLLECTION IN MONGODB USING NODE.JS
        db.collection("timetable").insertOne(data, (err, collection) => {
            if (err) throw err;
            console.log("Record inserted successfully");
            console.log(collection.ops);
        });
        console.log('success')
        return res.redirect('/public/main.html');
    })

})


module.exports = router