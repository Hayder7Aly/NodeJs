
const fs = require("fs");
const chalk = require("chalk");



const addNote = (noteData) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((elem, i) => {
    return noteData.title === elem.title;
  });


  if (duplicateNotes.length === 0) {
    notes.push(noteData);
    saveNotes(notes);
    console.log(chalk.green.inverse("Add Note .."));
  } else {
    console.log(chalk.red.inverse("Note Already use .."));
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const data = fs.readFileSync("notes.json", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((elem, i) => {
    return elem.title !== title;
  });

  if (notes.length !== newNotes.length) {
    console.log(chalk.green.inverse("Remove Note !"));
  } else {
    console.log(chalk.red.inverse("Note not found !"));
  }

  saveNotes(newNotes);
};

const listOfNotes = () => {
    const notes = loadNotes()
    notes.forEach((note,i) => {
        console.log(note);
    })
}

const readANote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note, i) => note.title === title)
    if(!findNote){
        console.log(chalk.red.inverse('Note not Found !'));
    }else{
        console.log(chalk.green.inverse(`${findNote.body}`));
    }
}

module.exports = {
  
  addNote,
  removeNote,
  listOfNotes,
  readANote
};
