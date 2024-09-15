const fs = require("fs");

setImmediate(() => {
  console.log(" first set immediate is executed");
});

setTimeout(() => {
  console.log("execution of  first set timer ");
}, 0);

Promise.resolve(Promise).then(() => console.log("promise resolved"));

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => {
    console.log("execution of  second set timer ");
  }, 0);

  process.nextTick(() => {
    console.log(" file cb next tick getsn done");
  });

  setImmediate(() => {
    console.log(" second set immediate is executed");
  });

  console.log("file reading is done");
});

process.nextTick(() => {
  console.log(" outer next tick getsn done");
});

console.log("last line gets done");
