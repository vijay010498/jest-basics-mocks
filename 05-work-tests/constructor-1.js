const { Person } = require("./constructor");
const seqPerson = new Person({
  name: "vijay",
  age: 23,
});

console.log(seqPerson);
module.exports = {
  seqPerson,
};
