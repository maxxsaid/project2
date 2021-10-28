/////////////////////////
// Import Dependencies
/////////////////////////
const express = require("express");
const List = require("../models/list.js");

//////////////////
// create router
//////////////////
const router = express.Router();

router.get("/", (req, res) => {
  List.find({})
    .then((lists) => {
      res.render("lists/index.liquid", { lists });
    })
    // error handling
    .catch((error) => {
      res.json({ error });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  List.findById(id)
    .then((list) => {
      // render the show template with the fruit
      res.render("lists/show.liquid", { list });
    })
    // error handling
    .catch((error) => {
      res.json({ error });
    });
});

/////////////////////////////
// export the router
/////////////////////////////
module.exports = router;
