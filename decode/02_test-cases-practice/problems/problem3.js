var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [10, 4],
  [2, 13],
  [5, -9],
  ["f", -4],
  [2]
]

let outputs = [
  6,
  0,
  14,
  15,
  -4,
  undefined,
  undefined
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x) {
  if (typeof x[0]=='number' && typeof x[1]=='number'){
    return (x[0] + x[1]);
  }else{
    return undefined;  
  }
}

function runTest(i) {
    var expected = outputs[i];
    var actual = f(inputs[i]);
    //console.log("actual: ", actual, "expected: ", expected)
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
