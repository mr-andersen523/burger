const connection = require("../config/connection.js");

const orm = {

    //METHODS//

    selectAll: (tableInput, callback) => {

        // SQL query string - Return all records
        const queryString = "SELECT * FROM ??";

        // Query String
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },


    insertOne: (tableInput, colOneInput, colTwoInput, colOneValue, colTwoValue, callback) => {

        // SQL query string - Insert record
        const queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";

        // Query String
        connection.query(queryString, [tableInput, colOneInput, colTwoInput, colOneValue, colTwoValue], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },



    updateOne()


}




// export ORM object
module.exports = orm;