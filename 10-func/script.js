'use strict';

const fn = function (str) {
  return str.toUpperCase();
};

const higherOrder = function (name, fn) {
  return console.log(`Hello ${fn(name)}`);
};

console.log(higherOrder('devon', fn));

// bind & call set the this keyword to the object calling
// bind also allows to set defualt arguments
