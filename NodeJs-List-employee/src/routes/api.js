const express = require("express");
const {
  getUsersAPI,
  postCreateUsersAPI,
  putUpdateUserAPI,
  deleteUser,
  postUpsimgleFile,
  postMultipleFileAPI,
} = require("../controllers/apiControllers");

const {
  postCreateCustomer,
  postCreateArrCustomer,
  GetCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

const routerAPI = express.Router();

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUsersAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUser);
routerAPI.post("/file", postUpsimgleFile);
routerAPI.post("/files", postMultipleFileAPI);

routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-array", postCreateArrCustomer);
routerAPI.get("/customers", GetCustomer);
routerAPI.put("/customers", updateCustomer);
routerAPI.delete("/customers", deleteCustomer);

module.exports = routerAPI;
