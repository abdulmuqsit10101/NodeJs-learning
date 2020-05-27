// The Global Object in Node provides functions as the window object provides in browser.
// for example the window object in browser provides console.log() and setInterval() the Global object in Node provides
// console.log() and setInterval() as well.

console.log('hello world!');

let a = 0;

var increment = setInterval(function () {
  a += 1;
  console.log('a : ', a);
  if (a >= 5) {
    clearInterval(increment);
  }
}, 1000);
