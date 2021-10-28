/////////////////////////
// Import Dependencies
/////////////////////////
const express = require("express");
const List = require("../models/list.js");

//////////////////
// create router
//////////////////
const router = express.Router();
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }
});
// INDEX
router.get("/", (req, res) => {
  List.find({ username: req.session.username })
    .then((lists) => {
      res.render("lists/index.liquid", { lists });
    })
    .catch((error) => {
      res.json({ error });
    });
});

// NEW
router.get("/new", (req, res) => {
  res.render("lists/new.liquid");
});

// CREATE
router.post("/", (req, res) => {
  req.body.check = req.body.check === "on" ? true : false;
  req.body.username = req.session.username;
  List.create(req.body)
    .then((list) => {
      res.redirect("/lists");
    })
    .catch((error) => {
      res.json({ error });
    });
});

//EDIT
router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  List.findById(id)
    .then((list) => {
      res.render("lists/edit.liquid", { list });
    })
    .catch((error) => {
      res.json({ error });
    });
});

// UPDATE
router.put("/:id", (req, res) => {
  const id = req.params.id;
  req.body.check = req.body.check === "on" ? true : false;
  List.findByIdAndUpdate(id, req.body, { new: true })
    .then((list) => {
      res.redirect("/lists");
    })
    .catch((error) => {
      res.json({ error });
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  List.findByIdAndRemove(id)
    .then((list) => {
      res.redirect("/lists");
    })
    .catch((error) => {
      res.json({ error });
    });
});

// SHOW
router.get("/:id", (req, res) => {
  const id = req.params.id;
  List.findById(id)
    .then((list) => {
      res.render("lists/show.liquid", { list });
    })
    .catch((error) => {
      res.json({ error });
    });
});

/////////////////////////////
// export the router
/////////////////////////////
module.exports = router;
