// const moduleData = require("./math")
// import { add, sub } from "./math.js";

// // console.log("안녕 Node.js");
// // console.log(moduleData.add(7, 8));
// // console.log(moduleData.sub(7, 8));

// // const { add, sub } = require("./math");

// console.log(add(1, 2));
// console.log(sub(1, 2));

import test from "./math.js";
console.log(test(10, 2));

import { add, sub } from "./math.js"
console.log(add(1, 2));
console.log(sub(1, 2));


import randomColor from "randomcolor";
const color = randomColor()

console.log(color)