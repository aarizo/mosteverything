var assert = require('assert');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["hi", 1],
  ["function", 7],
  ["this", 0],
  ["string", 4],
  ["", 9],
  ["letter", 3],
  ["example", 5],
]

let outputs = [
  "o",
  "i",
  "n",
  "t",
  "n",
  undefined,
  "t",
  "l"
]

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(arr, id) {
    return arr[id];
}

function runTest(i) {
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input[0], input[1]);
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
runTest(7);
