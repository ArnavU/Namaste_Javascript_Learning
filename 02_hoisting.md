## Hoisting in JS

Hoisting is JavaScript's default behavior of moving declarations to the top.

In JavaScript, a variable can be declared after it has been used.

``` js
console.log(x); // undefined
var x = 5;
```

```
Variables defined with let and const are hoisted to the top of the block, but not initialized.

Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared:
```

``` js
carName = "Volvo";
let carName;

// this will throw ReferenceError
```