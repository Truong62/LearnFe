const express = require("express");
const {
  getHomepage,
  getMain,
  getNavbar,
  getSubmitUser,
} = require("../controllers/homeControlleer");
const router = express.Router();

router.get("/", getMain);
router.get("/abc", getHomepage);
router.get("/navbar", getNavbar);
router.post("/submit-user", getSubmitUser);

module.exports = router;
