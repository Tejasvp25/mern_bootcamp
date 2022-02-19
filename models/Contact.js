const mongoose = require("mongoose");

const Contact = mongoose.model(
  "contacts",
  new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    email: String,
    pictureUrl: String,
  })
);

module.exports = Contact;
