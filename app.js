// normal functions

function sayHi() {
  console.log('Hi!');
}

sayHi();

// functional expression

const sayBye = function () {
  console.log('bye');
};

sayBye();

function callFunction(ftn) {
  ftn();
}

callFunction(sayBye);

