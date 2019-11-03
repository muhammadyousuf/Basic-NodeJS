/*

-----Lesson three video two
const fs = require("fs");

fs.writeFileSync("notes.txt", "Run Node JS Application");

fs.appendFileSync("notes.txt", "\nMy Name is Yousuf");


*/

/*
-----Lesson three video three
const { add, name } = require("./utils");
const notes = require("./notes");
console.log(notes());
let sum = add(4, 6);
console.log(name, " app file", sum);

*/

const validator = require("validator");

console.log(validator.isEmail("muhammadyousuf@327gmail.com"));

console.log(validator.isURL('https://www.facebook.com'))
