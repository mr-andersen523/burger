// import `orm.js` 
const orm = require("../db/config/orm");

// code that will call the ORM functions using burger specific input for the ORM
// Burger Model
const burgers = {

    // SelectAll method to call orm.selectAll
    selectAll: (callback) => {

        orm.selectAll("burgers", (res) => {
            callback(res);
        });
    },

    // Insert method to call orm.insert
    insert: (burgerName, devoured, callback) => {

        orm.insertOne("burgers", "burger_name", "devoured", burgerName, devoured, (res) => {
            callback(res);
        });
    },

    // Update method to call orm.updateOne
    update: (id, devoured, callback) => {
        orm.updateOne("burgers", "devoured", devoured, "id", id, (res) => {
            callback(res);
        });
    },

};
// Export at the end of the `burger.js` file
module.exports = burgers;