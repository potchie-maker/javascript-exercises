const removeFromArray = function(arr, ...rem) {
  for (const take of rem) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === take) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
