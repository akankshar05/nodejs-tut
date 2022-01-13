// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
// const data = require("./06-alternative-flavor");
// require("./07-mind-grenade");
// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);

console.log(names);
console.log(sayHi);

// kisi file ko include krne k liye .... "require ka use krna hai"
