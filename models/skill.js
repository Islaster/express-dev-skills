module.exports = {
  getAll,
  getOne,
  getSubs,
};

const skills = [
  { id: 16465165, talent: "JavaScript", sub: ["Dom", "Jquery", "Vanilla"] },
  { id: 979469, talent: "Html", sub: ["none"] },
  { id: 465162981, talent: "CSS", sub: ["bootstrap"] },
];

function getAll() {
  return skills;
}

function getOne(id) {
  S;
  return skills.find((skill) => skill.id == id);
}
function getSubs(id) {
  let skill = skills.find((skill) => skill.id == id);
  return skill.sub;
}
