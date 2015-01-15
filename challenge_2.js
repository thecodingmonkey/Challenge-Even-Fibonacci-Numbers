exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  // do your work here
  var fibonacciNumbers = {};
  var i = 1, j = 1;

  while (j < 1000000000) {
    var k = i + j;
    fibonacciNumbers[k] = true;
    i = j;
    j = k;
  }

  for(i=2; i <= n; i++, i++) {
      if (fibonacciNumbers[i] === true) {
        sum = sum + i;
      }

  }


  return sum;  // we never reach here
};