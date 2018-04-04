var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [[1,3,8,5], [1,3,4,5]],
    [[7,4,5,11], [1,3,5,11]],
    [[6,22,12,31], [1,31,4,5]],
    [[4,5], [4,5]],
    [4,5] 
]

let outputs = [
    [8,4],
    [7,4,1,3],
    [6,22,12,1,4,5],
    [],
    undefined
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
uniqueElements(2,3); // undefined, not arrays
*/

function f(arr) {
    if (typeof arr[0] == 'object' && typeof arr[1] == 'object'){
        var arrUniqueElem = [];
        for (var i = 0; i < arr[0].length; i++){
            if (arr[1].indexOf(arr[0][i])==-1) { 
                arrUniqueElem.push(arr[0][i])
            }
        }
        for (var i = 0; i < arr[1].length; i++){         
            if (arr[0].indexOf(arr[1][i])==-1) {
                arrUniqueElem.push(arr[1][i])
            }
        }
        return arrUniqueElem;
    }
    else{
        return undefined;
    }
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

