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


    insertOne()


    updateOne()


}




// export ORM object
module.exports = orm;