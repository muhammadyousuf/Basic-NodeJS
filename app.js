/*

-----Lesson three video two
const fs = require("fs");

fs.writeFileSync("notes.txt", "Run Node JS Application");

fs.appendFileSync("notes.txt", "\nMy Name is Yousuf");


*/
const { add, name } = require("./utils");
const notes = require("./notes");
console.log(notes());
let sum = add(4, 6);
console.log(name, " app file", sum);
