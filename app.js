const fs = require("fs");

fs.writeFileSync("notes.txt", "Run Node JS Application");

fs.appendFileSync("notes.txt", "\nMy Name is Yousuf");
