// Dependencies
const orm = require("../config/orm.js");

// burgers model
const burgers = {

    // SelectAll method 
    selectAll: (callback) => {

        orm.selectAll("burgers", (res) => {
            callback(res);
        });
    },

    // Insert method 
    insert: (burgerNAme, devoured, callback) => {

        orm.insertOne("burgers", "burger_name", "devoured", burgerNAme, devoured, (res) => {
            callback(res);
        });
    },

    // Update method 
    update: (id, devoured, callback) => {
        orm.updateOne("burgers", "devoured", devoured, "id", id, (res) => {
            callback(res);
        });
    },

    // Delete method 
    delete: (id, callback) => {
        orm.delete("burgers", "id", id, (res) => {
            callback(res);
        });
    }
};

// export for burgers_controller
module.exports = burgers;