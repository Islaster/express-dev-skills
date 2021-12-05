const skill = require("../models/skill.js");

module.exports = {
  index,
  show,
};

function index(req, res) {
  let skills = skill.getAll();
  res.render("skills", {
    skills,
  });
}

function show(req, res) {
  let skills = skill.getOne(req.params.id);
  let subs = skill.getSubs(req.params.id);
  res.render("sub", { skills, subs });
}
