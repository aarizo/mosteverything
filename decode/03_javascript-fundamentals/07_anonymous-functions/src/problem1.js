// fix all the errors
function c(g, h) {
    var x = g(6);
    var y = h(8);
    return [x, y];
}

function t() {
    
    var test1 = function (x) {
            return x + 1
        }
    var test2 = function (y) {
        return y * 2
    }
    return c(test1, test2);
}

module.exports = t;
