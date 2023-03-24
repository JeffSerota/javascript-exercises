const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      sum += arr[i];
    }
  }
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result *= arr[i];
    }
  }
  return result;
}

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(n) {
    if (n === 1 || n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
