# Namaste_Javascript_Learning

-   JS is a dynamically typed - data type is determined at runtime
-   JS is a sinchronous single-threaded interpreted language.
-   Every browser has its own JavaScript engine. Google Chrome - V8 engine, Mozilla - SpiderMonkey, and so on.

## Execution Context in JS

-   Everything in JS happens in execution context.
-   There are two types of execution contexts: **global** and **function**.
-   The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript.
-   A function execution context is created whenever a function is called, representing the function's local scope.

### Components of Execution Context

1. Memory Component(Variable Environment)
2. Code Component(Thread of Execution)

### Phases in Execution Context

1. Creation Phase
2. Execution Phase

#### Consider the example
```js
var n = 5;

function square(n) {
	var ans = n * n;
	return ans;
}

var square1 = square(n);
var square2 = square(8);

console.log(square1);
console.log(square2);
```

#### 1) Creation Phase
![Creation Phase](https://www.freecodecamp.org/news/content/images/2022/12/untitled-2.png)

Events during Creation Phase
1) Creates a global object that is window in the browser and global in NodeJs.
2) Sets up a memory for storing variables and functions.
3) Stores the variables with values as undefined and function references.

#### 2) Execution Phase
![Execution Phase](https://www.freecodecamp.org/news/content/images/2022/12/untitled-3-1.png)

- Now, in this phase, it starts going through the entire code line by line from top to bottom. 
- When it encounters n=5, "5" is assigned to "n".
- When it encounters function call, a new execution context is created, then similar to above steps are repeated.
- When the function returns the value, then the execution context is destroyed. Similarly, the global execution context is also destroyed.

![Execution Phase](https://www.freecodecamp.org/news/content/images/2022/12/untitled-4.png)

## Call Stack
- Keeps tracks of all the contexts (global and functional).
- Follows LIFO principle
- When function execution is finished the context is removed and control goes back to parent execution context.