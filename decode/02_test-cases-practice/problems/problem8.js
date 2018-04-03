var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  'hello',
  'how are you',
  'hi',
  'good',
  'thank you'
]

let outputs = [
  'olleh',
  'uoy era woh',
  'ih',
  'doog',
  'uoy knaht'
]

/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use a for loop for this exercise.
*/
function f(str) {
    if (typeof str == 'string'){
        var reversed = '';
        for (var i = str.length; i > 0; i--){
            reversed += str[i-1];
        }
    }
    return reversed;
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

