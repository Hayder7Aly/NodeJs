const chalk = require("chalk");
const { string } = require("yargs");
const yargs = require("yargs");
const { addNote, removeNote, listOfNotes, readANote } = require("./notes.js");

// customize yargs version
yargs.version("1.1.0");

// add, remove , read, list

// create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addNote({ title: argv.title, body: argv.body });
  },
});

// create remove command

yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("Removing a note ...");
    removeNote(argv.title);
  },
});

// create list command

yargs.command({
  command: "list",
  describe: "List your notes",

  handler: (argv) => {
    console.log("Listing out all note ...");
    listOfNotes();
  },
});

// create read command

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("Reading a note ...");
    readANote(argv.title);
  },
});

// console.log(yargs.argv);
yargs.parse();
