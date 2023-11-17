const User = require("../models/user");

const getUsersAPI = async (req, res) => {
  let results = await User.find({});

  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const postCreateUsersAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  console.log(email, "    ", name, "    ", city);
  let user = await User.create({
    email: email,
    name: name,
    city: city,
  });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const putUpdateUserAPI = async (req, res) => {
  let id = req.body.id;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let user = await User.updateOne(
    { _id: id },
    { name: name, email: email, city: city }
  );
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const deleteUser = async (req, res) => {
  let id = req.body.userId;
  console.log(req.body);
  console.log(id);
  let user = await User.deleteOne({ _id: id });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

module.exports = {
  getUsersAPI,
  postCreateUsersAPI,
  putUpdateUserAPI,
  deleteUser,
};
