var connection = require('../config/connection.js');

function objToSql(ob) {
    var arr = [];

    // for loop to loop the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // checks to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Vegan Burger => 'Vegan Burgers')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    // translates the array of strings to a single comma-separated string
    return arr.toString();
}

//creating the orm var

var orm = {
    selectAll: function(table, callback){
        var queryString = "SELECT * FROM " + table + ";"
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    //creating string to add to db
    insertOne: function(table, cols, values, callback){
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (?";
        queryString += ") ";

        connection.query(queryString, values, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function(table, objColVals, condition, callback) {
        console.log(objColVals)
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
}
module.exports = orm;
