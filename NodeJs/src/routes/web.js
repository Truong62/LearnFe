const express = require("express");
const { getHomepage, getMain } = require("../controllers/homeControlleer");
const router = express.Router();

router.get("/", getMain);
router.get("/abc", getHomepage);

module.exports = router;
