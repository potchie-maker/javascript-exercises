const palindromes = function (string) {
  const lower = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = lower.split('').reverse().join('');
  console.log(lower);
  console.log(reversed);
  return lower === reversed;
};

// Do not edit below this line
module.exports = palindromes;
