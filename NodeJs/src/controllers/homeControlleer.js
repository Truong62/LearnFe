const configDB = require("../config/database");

let use = [];
const getHomepage = (req, res) => {
  configDB.query("select * FROM `User` ", function (err, results, fields) {
    use = results;
    console.log("results: ", results);
    res.send(JSON.stringify(use));
  });
};

const getMain = (req, res) => {
  res.render("index.ejs");
};

const getNavbar = (req, res) => {
  res.render("home.ejs");
};

const getSubmitUser = (req, res) => {
  console.log(req.body);
  res.send("Hello User");
};
module.exports = {
  getHomepage,
  getMain,
  getNavbar,
  getSubmitUser,
};
