var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [3, 5],
  [2],
  [1, 7],
  [3, 'a']
]

let outputs = [
  14,
  15,
  undefined,
  7,
  undefined
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x) {
  
  if (typeof x[0] == 'number' && typeof x[1] == 'number'){
    return (x[0] * x[1]);
  }else{
    return undefined;  
  }
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
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
