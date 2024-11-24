const convertToCelsius = function(fah) {
  let temp = (fah - 32) * (5/9);
  return temp;
};

const convertToFahrenheit = function(cel) {
  let temp = cel * (9/5) + 32;
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
