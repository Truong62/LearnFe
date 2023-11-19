const express = require("express");
const {
  getUsersAPI,
  postCreateUsersAPI,
  putUpdateUserAPI,
  deleteUser,
  postUpsimgleFile,
} = require("../controllers/apiControllers");

const routerAPI = express.Router();

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUsersAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUser);
routerAPI.post("/file", postUpsimgleFile);

module.exports = routerAPI;
