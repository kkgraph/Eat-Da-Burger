var mysql = require("mysql");
var dotenv = require("dotenv").config()
var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3030,
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        user: "root",
        database: "burgers_db"
    });
}

connection.connect(function(err){
    if(err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("connect as id" + connection.threadId);
})

module.exports = connection;