const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const dupliicateNote = notes.find(notes => {
    return notes.title.toLowerCase() === title.toLowerCase();
  });
  if (!dupliicateNote) {
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

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));
  notes.forEach(note => {
    console.log(chalk.green.inverse("Title: ", note.title));
  });
};
const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
