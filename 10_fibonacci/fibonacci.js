const fibonacci = function(num) {
  seqNum = Number(num);
  
  if (seqNum < 0) return 'OOPS';
  if (seqNum === 0) return 0;

  let fib = [1, 1];
  
  for (let i = 2; i < seqNum; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  console.log(fib);

  return fib[seqNum - 1];
};

// Do not edit below this line
module.exports = fibonacci;
