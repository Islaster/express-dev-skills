const skill = require("../models/skill.js");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  createSub,
  delete: deleteSkill,
  edit,
  editSub,
  deleteSub,
};

function index(req, res) {
  let skills = skill.getAll();
  res.render("./skills/index", {
    skills,
  });
}

function show(req, res) {
  let skills = skill.getOne(req.params.id);
  let subs = skill.getSubs(req.params.id);
  res.render("./skills/sub", { skills, subs });
}

function newSkill(req, res) {
  res.render("./skills/new");
}

function create(req, res) {
  skill.create(req.body);
  let arr = req.body.talent.split("");
  arr[0] = arr[0].toUpperCase();
  req.body.talent = arr.join("");
  res.redirect("/skills");
}

function createSub(req, res) {
  skill.createSub(req.params.id, req.body.sub);
  res.redirect(`/skills/${req.params.id}`);
}

function deleteSkill(req, res) {
  skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

function deleteSub(req, res) {
  skill.deleteOneSub(req.params.id);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  skill.edit(req.params.id, req.body.talent);
  res.redirect("/skills");
}

function editSub(req, res) {
  skill.editSub(req.params.id, req.body.sub);
  res.redirect(`/skills/${req.params.id}`);
}
