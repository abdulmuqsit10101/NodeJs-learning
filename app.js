// module to read write files.
const fs = require('fs');

// read a file
const readMe = fs.readFileSync('readMe.txt', 'utf8');

// write a file
fs.writeFileSync('./writeMe.txt', 'Hello buddy! I am new file created by writeFileSyn.');
