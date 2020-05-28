const events = require('events');

const myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function (msg) {
  console.log('msg : ', msg);
});

myEmitter.emit('someEvent', 'hello world!');
