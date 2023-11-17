const express = require("express");
const {
  getUsersAPI,
  postCreateUsersAPI,
  putUpdateUserAPI,
  deleteUser,
} = require("../controllers/apiControllers");

const routerAPI = express.Router();

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUsersAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUser);

module.exports = routerAPI;
