function square(x) {
    console.log('x; ', x)
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}
function reverseString(str) {
  var splitString = str.split(""); // var splitString = "hello".split("");
 
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    
}
// Expand each of the following and get the result of the expression
// #1
var z = decrement(3)
var y = square(z);
var x = decrement(y);
var w = square(x);

// #2
var a = square(3);
var b = square(a);
var c = decrement(b);
var d = decrement(c)

// #3
var r = reverseString("hello");
var s = duplicateString(r)

// #4
var o = duplicateString("foo");
var p = duplicateString(o);
var q = reverseString(p)

