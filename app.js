// Streams and Buffers

// Buffers is temporary storage spot of chunks of data to transfer them from one place to other.
// And Stream is this flow of data in small chunks for better node server performance. We can create streams in Node Js.

// Read Streams

const fs = require('fs');
const myReadStream = fs.createReadStream(__dirname + '/dummyText.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/streamWritten.txt');

myReadStream.pipe(myWriteStream); // pipe will do the same process and will put the data to myWriteStream
