var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "how are you doing today",
    "I like coffee",
    "I do my homework",
    "I GO TO THE GYM",
    ""
]

let outputs = [
    "How Are You Doing Today",
    "I Like Coffee",
    "I Do My Homework",
    "I Go To The Gym",
    ""
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    
    var newStr = '';
    for (var i = 0; i < str.split(' ').length; i++){
        if (newStr != '') newStr += ' '
        var word = str.split(' ')[i]
        newStr += word.substr(0, 1).toUpperCase() + word.substr(1, word.length-1).toLowerCase();        
    }
    return newStr;
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

