const express = require("express");
const router = express.Router();
const skillsCtrl = require("../controller/skill.js");
//send data to browser
router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new);
router.get("/:id", skillsCtrl.show);
// create new data
router.post("/", skillsCtrl.create);
//Delete Data
router.delete("/:id", skillsCtrl.delete);
module.exports = router;
