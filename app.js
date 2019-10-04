
const getNotes = require('./notes.js')
const yargs = require('yargs')
const chalk = require ('chalk')



yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => {
    console.log('adding a new note')
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: () => {
    console.log('Removing the note')
  }
})

yargs.command({
  command: 'list',
  describe: 'listing notes',
  handler: () => {
    console.log('Listing notes')
  }
})

yargs.command({
  command: 'read',
  describe: 'reading note',
  handler: () => {
    console.log('Reading notes')
  }
})
console.log(yargs.argv)