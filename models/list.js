///////////////////////////////////
// import dependencies
///////////////////////////////////
// import the existing connected mongoose object from connection.js
const mongoose = require("./connection");

// destructuring Schema and model from mongoose
const { Schema, model } = mongoose;

const listSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: false },
  decription: String,
  check: Boolean,
});

const List = model("List", listSchema);

module.exports = List;
