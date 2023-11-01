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
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  // let { email, name, city } = req.body;

  // console.log(req.body.email, "\bn", req.body.name, "\bn", req.body.city);

  configDB.query(
    "INSERT INTO User (email, name, city) VALUES (?, ?, ?)",
    [email, name, city],
    function (err, results) {
      if (err) {
        console.error(err);
        res.status(500).send("Error creating user");
      } else {
        console.log(results);
        res.send("User created successfully");
      }
    }
  );
};
const getCreate = (req, res) => {
  res.render("creare.ejs");
};
const getDataBd = (req, res) => {
  configDB.query("select * FROM `User`"),
    function (err, results) {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving data from the database");
      } else {
        res.json(results);
      }
    };
};
module.exports = {
  getHomepage,
  getMain,
  getNavbar,
  getSubmitUser,
  getCreate,
  getDataBd,
};
