var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ['hello', 2],
  ['what', 3],
  ['bye', 0],
  ['hi', 1],
  ['how', 4],
  ['are', -2],
  ['you', 'a'],
]

let outputs = [
  'hellohello',
  'whatwhatwhat',
  '',
  'hi',
  'howhowhowhow',
  '',
  undefined
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
function f(arr) {
    if (typeof arr[0] == 'string' && typeof arr[1] == 'number'){
        if (arr[1] <= 0) return '';
        else{
            var str = '';
            for (var i = 1; i <= arr[1]; i++) {
                str += arr[0];
            }
            return str;
        }
    }
    else return undefined;
    
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
runTest(6);

