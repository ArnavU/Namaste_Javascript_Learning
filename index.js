function example() {
    console.log(a); // undefined
    var a = 10;
    console.log(a); // 10
  }
  example();
  console.log(a); // ReferenceError: a is not defined