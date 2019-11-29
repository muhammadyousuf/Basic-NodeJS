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

/*
-----Lesson three video four
const validator = require("validator");

console.log(validator.isEmail("muhammadyousuf@327gmail.com"));

console.log(validator.isURL('https://www.facebook.com'))

*/

/*
-----Lesson three video five
const chalk = require('chalk');

console.log(chalk.green('Sucess'))

console.log(chalk.white.bgRed.inverse.bold('Muhammad Yousuf'))
*/

/*
-----Lesson four video two
let command = process.argv[2];
console.log(process.argv);
if (command === "add") {
  console.log("Adding New Notes");
} else if (command === "remove") {
  console.log("Remove Notes");
}
*/
const notes = require("./notes");
const yargs = require("yargs");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Add a new title",
      type: "string",
      demandOption: true
    },
    body: {
      describe: "Add a new body",
      type: "string",
      demandOption: true
    }
  },
  handler(avrg) {
    notes.addNote(avrg.title.toLowerCase(), avrg.body.toLowerCase());
  }
});

yargs.command({
  command: "remove",
  describe: "removing a note",
  builder: {
    title: {
      describe: "Note title",
      type: "string",
      demandOption: true
    }
  },
  handler(avrg) {
    notes.removeNote(avrg.title.toLowerCase());
  }
});

yargs.command({
  command: "list",
  describe: "List all note",
  handler() {
    console.log("Listing a notes!");
  }
});

yargs.command({
  command: "read",
  describe: "read a note",
  handler() {
    console.log("read a notes!");
  }
});
yargs.parse();
//console.log(yargs.argv);
