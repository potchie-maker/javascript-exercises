const removeFromArray = function(arr, rem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === rem) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
