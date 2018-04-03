var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "how are you doing today",
    "I like coffee",
    "I do my homework",
    "I go to the gym",
    ""
]

let outputs = [
  "today",
  "coffee",
  "homework",
  "gym",
  ""
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    var length = str.length;
    var longest = 0;
    var longestWord = '';
    for (var i = 0; i < str.split(' ').length; i++){
        if (str.split(' ')[i].length >= longest) {
            longest = str.split(' ')[i].length;
            longestWord = str.split(' ')[i];
        }
    }
    return longestWord;
    
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

