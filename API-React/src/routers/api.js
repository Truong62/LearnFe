const express = require("express");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const { postYoutube, getYoutube } = require("../controller/youtube")

const routerAPI = express.Router();

routerAPI.post("/youtube", upload.fields([{ name: "logo" }, { name: "thumnail" }]), postYoutube)
routerAPI.get("/youtube", getYoutube)

module.exports = routerAPI;