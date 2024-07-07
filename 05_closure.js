// setTimeout() with for loop and var and let
console.log("for loop, var, setTimeout: ");
function x() {
    for(var i=1; i<=5; i++) { // var is globally scoped inside a block
        setTimeout(function() { // every function will refer to the same "i"
            console.log(i); 
        }, i*1000);
    }
}
x(); // output => 6 6 6 6 6

// --------------------------------------------------
setTimeout(() => {
    console.log("\nfor loop, let, setTimeout: ");
}, 5000);

function y() { 
    for(let i=1; i<=5; i++) { // let is block scoped 
        setTimeout(function() { // every function will refer to a seperate "i"
            console.log(i);
        }, i*1000 + 5000);
    }
}
y(); // output => 1 2 3 4 5

// --------------------------------------
// Q) Print the above output without using let(only var)
setTimeout(() => {
    console.log("\nfor loop, var, setTimeout (printing expected o/p using only var): ");
}, 10000)
function z() {
    for(var i=1; i<=5; i++) { // var is globally scoped inside a block

        function fun(x) {
            setTimeout(function() { // every function will refer to the same "i"
                console.log(x); 
            }, x*1000 + 10000);
        }

        fun(i);
    }
}
z(); // output => 6 6 6 6 6

// Closure can be used to make variables private
function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    
    return inner;
}

outer()();

// disadvantage of closure
// 1) closed variables may not be garbage collected
// 2) can cause browser to freeze
// 3) memory leakage 