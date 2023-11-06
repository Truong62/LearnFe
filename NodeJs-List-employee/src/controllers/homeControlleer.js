const configDB = require("../config/database");
const {
  getAllUser,
  getUserById,
  updateUserById,
  DeleteUserById,
} = require("../services/crdu");
let use = [];
const getHomepage = async (req, res) => {
  let results = await getAllUser();
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

  try {
    let [results, fields] = await configDB.query(
      "INSERT INTO User (email, name, city) VALUES (?, ?, ?)",
      [email, name, city]
    );

    res.send(
      "Created user succeed !<script>setTimeout(function(){window.location.href = '/abc';}, 2000);</script>"
    );
  } catch (error) {
    console.error("Error creating user: ", error);
    res.status(500).send("Error creating user");
  }
};

const getCreate = (req, res) => {
  res.render("creare.ejs");
};

const getUpdate = async (req, res) => {
  const userId = req.params.id;

  let user = await getUserById(userId);

  res.render("edit.ejs", { UserObj: user });
};

const getUpdateUser = async (req, res) => {
  let id = req.body.id;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  await updateUserById(email, name, city, id);
  // res.send("Updated user succeed !");
  res.redirect("/abc");
};
const getDelete = async (req, res) => {
  let userId = req.params.id;

  await DeleteUserById(userId);
  res.redirect("/abc");
};

module.exports = {
  getHomepage,
  getMain,
  getNavbar,
  getSubmitUser,
  getCreate,
  getUpdate,
  getUpdateUser,
  getDelete,
};
