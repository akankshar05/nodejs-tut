module.exports.items = ["item1", "item2"];
const person = {
  name: "bob",
};
const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

module.exports.singlePerson = person;
console.log(module);
