//npm -v
//npm i <packageName>
//npm -g <packageName>
//package.json - manifast file or npm init -y
//first, we install a dependency, then, call it :
//npm i lodash, const _ = require("lodash")
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
