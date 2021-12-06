const skill = require("../controller/skill");

module.exports = {
  getAll,
  getOne,
  getSubs,
  create,
  deleteOne,
};

const skills = [
  { id: 164651, talent: "JavaScript", sub: ["Dom", "Jquery", "Vanilla"] },
  { id: 979469, talent: "Html", sub: ["none"] },
  { id: 465162, talent: "CSS", sub: ["bootstrap"] },
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

function deleteOne(id) {
  const index = skills.findIndex((skill) => skill.id == id);
  skills.splice(index, 1);
}
