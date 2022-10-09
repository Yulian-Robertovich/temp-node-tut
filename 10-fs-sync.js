// fs module
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
//the same: const fs = require("fs");
//          fs.read;
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

//console.log(first, second);
// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result : ${first}, ${second}`
// );
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } //this flag doesn't overwrite but creates a new value
);
console.log("Done with this task.");
console.log("Starting the next one.");
