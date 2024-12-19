const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
	const result = numArr.reduce((sum, num) => sum + num, 0);
  return result;
};

const multiply = function(numArr) {
  const result = numArr.reduce((product, num) => product * num, 1);
  return result;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let numList = [];
  for (let i = 0; i < num; i++) {
    numList[i] = i + 1;
  }
  const result = numList.reduce((product, num) => product * num, 1);
  return result;
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
