const fs = require("fs");
const chalk = require("chalk");

let getNote = () => {
  return "Your Notes...";
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const dupliicateNotes = notes.filter(notes => {
    return notes.title.toLowerCase() === title.toLowerCase();
  });
  if (dupliicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Adding a new note!"));
  } else {
    console.log(chalk.red.inverse("Note title taken already!"));
  }
};
const saveNotes = notes => {
  const Jsondata = JSON.stringify(notes);
  fs.writeFileSync("notes.json", Jsondata);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
const removeNote = title => {
  const notes = loadNotes();
  const TakenNotes = notes.filter(note => {
    return note.title !== title;
  });
  if (notes.length > TakenNotes.length) {
    saveNotes(TakenNotes);
    console.log(chalk.green.inverse("Note Remove"));
  } else {
    console.log(chalk.red.inverse("No Note Found"));
  }
};
module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote
};
