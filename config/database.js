module.exports.new_db = "mongodb://localhost:27017/students"
module.exports.connect = (dbname) => {
    dbname.connect(dbname)
    chalk.bgGreen(console.log("student database connected"))
}
