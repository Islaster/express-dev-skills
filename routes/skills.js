const express = require("express");
const router = express.Router();
const skillsCtrl = require("../controller/skill.js");
//send data to browser
router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new);
router.get("/:id", skillsCtrl.show);
// create new data
router.post("/", skillsCtrl.create);
router.post("/:id", skillsCtrl.createSub);
//Delete Data
router.delete("/:id", skillsCtrl.delete);
router.delete("/:id/:sub", skillsCtrl.deleteSub);
//edit data
router.put("/:id", skillsCtrl.edit);
router.put("/:id/:sub", skillsCtrl.editSub);
module.exports = router;
