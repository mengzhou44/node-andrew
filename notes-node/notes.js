const fs = require('fs');
const _ = require('lodash');

const fetchNotes = () => {

    if (fs.existsSync('notes-data.json')) {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    }
    return [];

}

const saveNotes = (notes) => {
    try {
        fs.writeFileSync('./notes-data.json', JSON.stringify(notes, null, 4));
    } catch (e) {
        throw new Error('Error occured when saving notes ...')
    }
}

const addNote = (title, body) => {
    const found = getNote(title);
    if (found !== null) {
        throw new Error('title alreay exists!');
    }

    const notes = fetchNotes();
    notes.push({
        title,
        body
    });
    saveNotes(notes);
};

const getNote = (title) => {
     const notes = fetchNotes();
      
    const found = _.find(notes, note => note.title === title);
    if (found !== null) {
        return found;
    }
    return null;
}

const getAll = () => {
    return fetchNotes();
}

const removeNote = (title) => {
    debugger;
    const notes = fetchNotes();
    const filtered = _.filter(notes, (item) => item.title !== title);

    saveNotes(filtered);

    const message = filtered.length < notes.length ? 'Note was removed' : 'Note not found';
    console.log(message);

}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
