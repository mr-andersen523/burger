// Dependencies
const express = require("express");
const router = express.Router();
const burgers = require("../models/burgers");



// Get Route - all burgers from db
router.get("/", (req, res) => {

    // returns all burgers from database to index.handlebars
    burgers.selectAll((data) => {
      return res.render("index", { hamburgers: data });
    });
});
  
// Post Route - Add burger to db
router.post("/api/hamburger", (req, res) => {

  // Insert hamburger to db
  burgers.insert(req.body.name, false, (result) => {
    // Returns response for ajax call
    if (result.changedRows == 1) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Put Route - Update burger to devoured
router.put("/api/hamburger/:id", (req, res) => {

  const id = req.params.id;

  // Update hamburger in db
  burgers.update(id, true, (result) => {
    // Returns response for ajax call
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Delete Route - Delete burger from db
router.delete("/api/hamburger/:id", (req, res) => {
  const id = req.params.id;
  
  // Delete burger
  burgers.delete(id, (result) => {
    // Returns response for ajax call
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
  

module.exports = router;
  