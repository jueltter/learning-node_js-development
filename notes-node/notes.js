console.log('Starting notes.js');
const fs = require('fs');

var addNote = (tittle, body) => {
    // console.log('Adding note', tittle, body);
    var notes = fetchNotes();    
    
    var note = {
        tittle,
        body
    }

    var duplicateNotes = notes.filter((note) => note.tittle === tittle);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }    
}

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (tittle) => {
    //console.log('Reading note', tittle);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.tittle === tittle);
    return filteredNotes[0];
}

var removeNote = (tittle) => {
    //console.log('Removing note', tittle);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.tittle !== tittle);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    console.log('--');
    console.log(`Tittle: ${note.tittle}`);
    console.log(`Body: ${note.body}`);
}

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote,
    logNote: logNote
};

module.exports.age = 25;

module.exports.add = (a, b) => {
    return a + b;
};

//console.log(module);