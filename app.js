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
  } else if (req.url === "/contact") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
  } else if (req.url === "/api") {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const obj = {
      name: 'ali',
      age: 19,
      semester: '3rd'
    };
    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('listening at 127.0.0.1:3000');
