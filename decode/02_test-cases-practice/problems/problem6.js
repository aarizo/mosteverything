// pro tip: use nodemon instead of node
var assert = require('assert');

// we need 6 test cases. 
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ["sub", 10, 3],
  ["mult", 3, 5],
  [6, 8, 4],
  ["add", 10, 20]
]

let outputs = [
  30,
  undefined,
  7,
  15,
  undefined,
  30
]

/*
Use the operation argument to decide what this function will return. 
If it's "add", return the sum of the two numbers. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined

*/
function f(arr) {
  if (typeof arr[0] == 'string' && typeof arr[1] == 'number' && typeof arr[2] == 'number'){
    if (arr[0] == 'add') return arr[1] + arr[2];
    else if (arr[0] == 'sub') return arr[1] - arr[2];
    else if (arr[0] == 'mult') return arr[1] * arr[2];
    else return undefined;
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
runTest(5);
