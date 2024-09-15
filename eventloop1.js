const fs = require("fs");

const a = 100;

setImmediate(() => {
  console.log("set immediate is executed");
});

fs.readFile("./file.txt", "utf-8", () => {
  console.log("file reading is done");
});

setTimeout(() => {
  console.log("execution of set timer after 5 secs ");
}, 2000);

setTimeout(() => {
  console.log("execution of set timer ");
}, 0);

function printA() {
  console.log("value of a is", a);
}

printA();
console.log("last line of code");
