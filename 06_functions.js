// function statement
function fun() {
    console.log("fun is called");
}

// function expression
const myFunc = function() {
    console.log("myFunc is called");
}

const newFunc = function xyz() {
    console.log(xyz);
}

newFunc();
// xyz() ==> referenceError: xyz is not defined || locally scoped

// First Class Function -  first-class functions are functions that are treated as first-class citizens
// Assigned to Variables
// Passed as Arguments
// Returned from Other Functions
// Stored in Data Structures