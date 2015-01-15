exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  // do your work here
  var a=1, b=1;

  while (true) {
    var nextVal = a+b;
    if (nextVal > n) {
      return sum;
    }

    if ((nextVal % 2) === 0) {
      sum = sum + nextVal;
    }
    a = b;
    b = nextVal;
  }



  return sum;
};