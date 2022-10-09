const path = require("path");
console.log(path.sep); // for spesific separator
// //let's take a look at the path dot join so the join method
// which joins a sequence of path segments using that platform specific separator as the limiter and second thing it does it returns a normalized resulting path

// const filePath = path.join("/content", "subfolder", "test.txt");
// console.log(filePath);
//to remove we type / after content ???!!!
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//to return an absolute path we use resolve method
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
