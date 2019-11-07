let chalk=require('chalk');
let validator=require('validator');


const getNotes = require('./notes');

const msg = getNotes();
console.log(msg)

console.log(chalk.green.inverse(validator.isEmail('ninov.org')))







// const utils = require('./utils.js');
// const add = utils.add(4, 5)
// console.log(add);
// console.log(utils.names);