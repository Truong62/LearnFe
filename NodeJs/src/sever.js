const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8888;
const hosstname = process.env.HOST_NAME;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/abc", (req, res) => {
  res.send("to abc dsdsd ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
