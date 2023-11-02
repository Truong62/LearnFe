const configDB = require("../config/database");
const { getAllUser } = require("../services/crdu");
let use = [];
const getHomepage = async (req, res) => {
  let results = await getAllUser();
  console.log(results);
  return res.render("home.ejs", { users: results });
};

const getMain = (req, res) => {
  res.render("index.ejs");
};

const getNavbar = (req, res) => {
  res.render("home.ejs");
};

const getSubmitUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  let [results, fields] = await configDB.query(
    "INSERT INTO User (email, name, city) VALUES (?, ?, ?)",
    [email, name, city]
  );
  res.send("Created user succeed !");
};
const getCreate = (req, res) => {
  res.render("creare.ejs");
};

module.exports = {
  getHomepage,
  getMain,
  getNavbar,
  getSubmitUser,
  getCreate,
};
