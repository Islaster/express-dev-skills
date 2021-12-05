const express = require("express");
const router = express.Router();
const skillsCtrl = require("../controller/skill.js");

router.get("/", skillsCtrl.index);
router.get("/:id", skillsCtrl.show);

module.exports = router;
