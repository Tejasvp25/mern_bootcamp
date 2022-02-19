const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const { DB_URL } = require("./config");
const path = require("path");
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);
app.use(express.static(path.join(__dirname, "./client/build")));

app.listen(process.env.PORT || 4000, () => console.log("Server started"));
