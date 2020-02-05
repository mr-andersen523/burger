const connection = require("./connection");

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



    updateOne: (tableInput, setCol, setColVal, whereCol, whereColVal, callback) => {

        // SQL query string - Update record
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

        // Query String
        connection.query(queryString, [tableInput, setCol, setColVal, whereCol, whereColVal], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    delete: (tableInput, whereCol, whereColVal, callback) => {

        // SQL query string - Delete Record
        const queryString = "DELETE FROM ?? WHERE ?? = ?";

        // Query String
        connection.query(queryString, [tableInput, whereCol, whereColVal], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};



// export ORM object
module.exports = orm;