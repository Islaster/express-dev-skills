const skill = require("../controller/skill");

module.exports = {
  getAll,
  getOne,
  getSubs,
  create,
  createSub,
  deleteOne,
  deleteOneSub,
  edit,
  editSub,
};

const skills = [
  { id: 164651, talent: "JavaScript", sub: ["Dom", "Jquery", "Vanilla"] },
  { id: 979469, talent: "Html", sub: ["vanilla"] },
  { id: 465162, talent: "CSS", sub: ["bootstrap", "vanilla"] },
];

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id == id);
}
function getSubs(id) {
  let skill = skills.find((skill) => skill.id == id);
  return skill.sub;
}

function create(skillObj) {
  skillObj.id = Math.floor(Math.random() * 1000000);
  skillObj.sub = ["vanilla"];
  skills.push(skillObj);
}

function createSub(id, sub) {
  const i = skills.findIndex((skill) => skill.id == id);
  skills[i].sub.push(sub);
}

function deleteOneSub(id) {
  const index = skills.findIndex((skill) => skill.id == id);
  skills[index].sub.pop();
}

function deleteOne(id) {
  const index = skills.findIndex((skill) => skill.id == id);
  skills.splice(index, 1);
}

function edit(id, talent) {
  const index = skills.findIndex((skill) => skill.id == id);
  skills[index].talent = talent;
}

function editSub(id, sub) {
  const index = skills.findIndex((skill) => skill.id == id);
  skills[index].sub = sub;
}
