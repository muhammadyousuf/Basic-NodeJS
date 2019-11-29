const fs = require("fs");

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
    console.log("Adding a new note!");
  }else{
    console.log("Note title taken already!");
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

module.exports = {
  getNote: getNote,
  addNote: addNote
};
