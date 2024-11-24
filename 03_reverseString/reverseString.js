const reverseString = function(string) {
  let arr = string.split("");
  let rev = arr.reverse();
  let newString = rev.join("")
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
