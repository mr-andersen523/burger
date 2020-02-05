const express = require("express");
const burgers = require("../models/burgers");
const router = express.Router();

// GET route - Receive all burgers from db
router.get("/", (req, res) => {

    // returns all burgers from database to index.handlebars
    burgers.selectAll((data) => {
        return res.render("index", { hamburgers: data });
      });
  });



  // POST route - Add new burger to db
router.post("/api/hamburger", (req, res) => {

    // Inserts hamburger to db
  burgers.insert(req.body.name, false, (result) => {
    // Returns response for ajax call
    if (result.changedRows == 1) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// PUT Route - Updates hamburger to devoured
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

// DELETE Route - Delete burger from db
router.delete("/api/hamburger/:id", (req, res) => {
  const id = req.params.id;
  
  // Deletes selected hamburger
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