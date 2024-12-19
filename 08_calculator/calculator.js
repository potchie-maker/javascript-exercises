const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
	return numArr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(numArr) {
  return numArr.reduce((product, num) => product * num, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let numList = [];
  for (let i = 0; i < num; i++) {
    numList[i] = i + 1;
  }
  return numList.reduce((product, num) => product * num, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
