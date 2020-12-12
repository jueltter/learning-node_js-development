console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// console.log('Process:', process.argv);
// var command = process.argv[2];
// console.log('Command:', command);

const argv = yargs.argv;
console.log('yargs:', argv);
var command = argv._[0];
console.log('Command:', command);

if (command === 'add') {
    var note = notes.addNote(argv.tittle, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    }
    else {
        console.log('Note tittle taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNote(argv.tittle);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    }
    else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.tittle);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');    
}