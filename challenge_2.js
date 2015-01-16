exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  // do your work here

  var makeFibonacci = function (currentValue, idx, arr) {
//    console.log(currentValue, idx, arr);
    
    if (idx == 0) {
      return 0;
    } else if (idx < 3) {
      arr[idx] = 1;
      return 1;
    } else {
      arr[idx] = arr[idx-1] + arr[idx-2];
      return arr[idx-1] + arr[idx-2];
    }
  };

//
  var seq = [1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,1,1,1,1];  //.fill(0, 0, 10);
//  seq.fill(0, 0, 10);

//  var seq = new Array(50);
//  console.log(seq);
  seq = seq.map(makeFibonacci);
//  console.log(seq);



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