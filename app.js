// Streams and Buffers

// Buffers is temporary storage spot of chunks of data to transfer them from one place to other.
// And Stream is this flow of data in small chunks for better node server performance. We can create streams in Node Js.

// Read Streams

const fs = require('fs');
const http = require('http');

const server = http.createServer(function (req, res) {
  console.log('req : ', req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/home.html', 'utf8').pipe(res);
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('listening at 127.0.0.1:3000');
