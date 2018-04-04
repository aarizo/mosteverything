var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  'radar',
  'laval',
  'hello',
  'hi',
  'bye'
]

let outputs = [
  true,
  true,
  false,
  false,
  false
]

/*
Make this function return true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {

    if (typeof str == 'string'){
        var reversed = '';
        for (var i = str.length; i > 0; i--){
            reversed += str[i-1];
        }
    }

    console.log('reversed: ', reversed, 'str: ', str)
    if (str == reversed) return true;
    else return false;
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    console.log("actual: ", actual, "expected: ", expected)
    //assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

