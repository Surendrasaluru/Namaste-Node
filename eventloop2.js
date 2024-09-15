const fs = require("fs");

const a = 100;

setImmediate(() => {
  console.log("set immediate is executed");
});

process.nextTick(() => {
  console.log("next tick getsn done");
});

Promise.resolve(Promise).then(() => console.log("promise resolved"));

fs.readFile("./file.txt", "utf-8", () => {
  console.log("file reading is done");
});

setTimeout(() => {
  console.log("execution of set timer after 2 secs ");
}, 2000);

setTimeout(() => {
  console.log("execution of set timer ");
}, 0);

function printA() {
  console.log("value of a is", a);
}

printA();
console.log("last line of code");
