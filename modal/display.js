var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/info";
mongo.connect(new_db, function(error, db) {
    if (error) {
        throw error;
    }
    db.collection("timetable").find({}).toArray((err, result) => {
        var date = new Date()
        var day_s = ["monday", "tuesday", "wednesday", "thursday", "friday"]

        var date_i = date.getDay() - 1
            //  console.log(date_i)
        var day = day_s[date_i]
        console.log(day)
        var time = date.getHours()
        console.log(time)
        var simple = () => {
            textmul = {
                day: day,
                time: time

            }
            return textmul;
        }
        console.log(result[date_i].faculty_name)
    })
})