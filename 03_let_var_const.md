## let, var and const

In JavaScript, let, var, and const are used to declare variables, but they have different characteristics and behaviors. Here’s a detailed comparison:

### var 
---
**Scope**: var is function-scoped. If declared inside a function, it is accessible only within that function. If declared outside a function, it is globally scoped.

**Hoisting**: Variables declared with var are hoisted to the top of their scope and initialized with undefined. This means you can use the variable before its declaration without getting a reference error.

**Re-declaration**: You can re-declare a variable using var within the same scope without causing an error.

Example:
``` javascript
function example() {
    console.log(a); // undefined
    var a = 10;
    console.log(a); // 10
  }
  example();
  console.log(a); // ReferenceError: a is not defined
``` 
### let
---
**Scope**: let is block-scoped. It is only accessible within the block (denoted by {}) where it is declared.

**Hoisting**: Variables declared with let are hoisted but not initialized. This means you cannot use the variable before its declaration, or you will get a reference error.

**Re-declaration**: You cannot re-declare a variable using let within the same scope.
Example:

``` javascript
function example() {
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 10;
  console.log(a); // 10
}
example();
```

### const
---
**Scope**: const is block-scoped, like let.

**Hoisting**: Variables declared with const are hoisted but not initialized. You cannot use the variable before its declaration, or you will get a reference error.

**Re-declaration**: You cannot re-declare a variable using const within the same scope.

**Assignment**: const is used to declare variables with constant values. Once assigned, you cannot reassign a new value to the variable. However, if the variable holds an object or an array, the properties or elements of the object or array can still be modified.

Example:

``` javascript
function example() {
  const a = 10;
  console.log(a); // 10
  a = 20; // TypeError: Assignment to constant variable
}
example();
```

### Difference in scope of ``let`` and ``var``
- let is block-scoped.
- var is function-scoped or globally scoped if not within a function.

example:

``` js
if (true) {
    let x = 10;
    console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined
```

``` js
if (true) {
    var y = 20;
    console.log(y); // 20
}
console.log(y); // 20
```

