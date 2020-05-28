const events = require('events');
const util = require('util');

const Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

const james = new Person('James');
const mary = new Person('Mary');
const ryu = new Person('Ryu');

const people = [james, mary, ryu];
people.forEach(function (person) {
  person.on('speak', function (msg) {
    console.log(person.name, ' : ', msg);
  })
});

james.emit('speak', 'hello I am James and speaker');
mary.emit('speak', 'hello I am Mary');
ryu.emit('speak', `hello I am ${ryu.name}`);
