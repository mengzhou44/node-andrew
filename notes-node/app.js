const fs = require('fs');
const os = require('os');

const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const args = yargs.argv;


const command = process.argv[2];

try {
    switch (command) {

        case 'add':
            notes.addNote(args.title, args.body);
            break;
        case 'list':
            notes.getAll();
            break;
        case 'read':
            notes.getNote(args.title);
            break;
        case 'remove':
            notes.removeNote(args.title);
            break;
        default:
            console.log('command not recognized');
            break;
    }
}
catch (ex) {
    console.log('Error occured ' + ex);
}







