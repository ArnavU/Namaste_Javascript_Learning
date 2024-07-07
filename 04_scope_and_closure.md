### Lexical Scope
Lexical scope in JavaScript refers to the accessibility of variables based on their physical location within the source code. It means that a function can access variables defined in its outer scope where it was created, but not in scopes that are created inside it or from where it is called.

### Scope Chain
When a variable is referenced, JavaScript first searches in the local scope, then in progressively higher outer scopes, and finally in the global scope if necessary, until it finds the variable or reaches the end of the chain.

### Closure
Function along with its lexical environment bundled together is called closure.

In other words, a closure gives you access to an outer function's scope from an inner function.

``` js
function x() {
    let a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

let z = x();

// .......
z(); // though the execution context of x() is finished but the lexical environment is preserved

// the function will carry the reference to a not the value
```

**Uses of closure**
- Module Design Pattern
- Currying
- Functions like once
- memoize
- maintaining sate in async world
- setTimeouts
- Iterators
- and many more...

**Closure with setTimeout()**
``` js
function x() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    }, 3000);
}

x();
```

Explaination: 
The callback inside setTimeout() is stored in a seperate memory space, and when the timer is completed it is brought into the callstack and then executed. The callback forms a closure and carries the reference to the variable "i".

