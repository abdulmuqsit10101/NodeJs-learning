// Streams and Buffers

// Buffers is temporary storage spot of chunks of data to transfer them from one place to other.
// And Stream is this flow of data in small chunks for better node server performance. We can create streams in Node Js.

// Read Streams

const fs = require('fs');
const http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  const myReadStream = fs.createReadStream(__dirname + '/dummyText.txt', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
