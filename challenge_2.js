exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  // do your work here

  var makeFibonacci = function (currentValue, idx, arr) {
//    console.log(currentValue, idx, arr);
    
    if (idx < 2) {
//      arr[idx] = 1;
      return 1;
    } else {
//      arr[idx] = arr[idx-1] + arr[idx-2];
      return arr[idx-1] + arr[idx-2];
    }
  };

//  var fibNums = Array.apply(null, new Array(100)).map(Number.prototype.valueOf,1);
//  console.log('fib',fibNums);

//
  var seq = Array.apply(null, new Array(50)).map(Number.prototype.valueOf,1);  //.fill(0, 0, 10);
//  seq.fill(0, 0, 10);

//  var seq = new Array(50);
//  console.log(seq);
  seq = seq.map(function (currentValue, idx, arr) {
//    console.log(currentValue, idx, arr.toString());
    
    if (idx < 2) {
      
      return arr[idx] = 1;
    } else {
      
      return arr[idx] = arr[idx-1] + arr[idx-2];
    }
  });

  console.log("result: ",seq );



  function reduceFibonacci(prev, cur) {
    if ((cur % 2) === 0 && cur < n) {
//      console.log (prev, cur);
      return prev + cur;
    } else {
//      console.log('X', prev, cur);
      return prev;
    }
  }

//  console.log(seq.reduce(reduceFibonacci, 0));
  return seq.reduce(reduceFibonacci, 0);

//  return sum;  // we never reach here
};