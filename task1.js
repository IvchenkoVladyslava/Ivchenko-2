let arr = [];
arr[0] = 42;
arr[1] = "Hello";
arr[2] = true;

arr[3] = null;
console.log(arr.length);
let userInput = typeof prompt !== "undefined" ? prompt("Введіть будь-яке значення:") : "test value";
arr[4] = userInput;

console.log(arr[4]);
