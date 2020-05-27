const counter = function (arr) {
  console.log('the number of elements in array is : ', arr.length);
};

const adder = function (num1, num2) {
  console.log('the sum of two numbers is : ', num1 + num2);
};

const pi = 3.1416;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
