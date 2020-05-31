// module require for creating server
const http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey Ali');
});

server.listen(3000, '127.0.0.1');
console.log('server listening on port 3000');
