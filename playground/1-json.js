// let user = {
//   firstName: "Muhammad",
//   lastName: "Yousuf",
//   age: 24
// };

const fs = require("fs");

// let userObj = JSON.stringify(user);
// fs.writeFileSync("1-json.json", userObj);

let readBuffer = fs.readFileSync("1-json.json");
let userConvertString = readBuffer.toString();
let userParse = JSON.parse(userConvertString);
console.log(userParse.firstName);

userParse.age = 22;
let convertString = JSON.stringify(userParse);

fs.writeFileSync("1-json.json", convertString);
