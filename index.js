// local modules

const { add, a } = require('./local-1');
const { add: add2, a: a2 } = require('./local-2');

console.log(add2(20, 30));


// built-in-modules
const path = require("path");
console.log(path.parse("D:\Next Level Web Development\learning-node\index.js"));