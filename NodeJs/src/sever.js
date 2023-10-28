const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/abc", (req, res) => {
  res.send("to abc");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
