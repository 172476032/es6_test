import fetch from 'isomorphic-fetch';
import { name, age, add, sub } from "./st"
import * as func from "./st"
// import def from "./exdefault" 
import { mul } from "./exdefault"

import * as exdefault1 from "./exdefault1"

console.log(name)
console.log(add(2, 3))

console.log(func.add(5, 5))

// console.log(def.add(1, 2))
console.log(mul(2, 3))

console.log(exdefault1.default(4, 5))




























// Will fetch README
// fetch('https://raw.githubusercontent.com/katopz/vscode-debug-nodejs-es6/master/README.md')
//     .then(function (response) {
//         // Something wrong.
//         if (response.status >= 400) {
//             throw new Error("Bad response from server");
//         }
//         // Parse response to text
//         return response.text();
//     })
//     .then(function (responseText) {
//         // Our README.
//         console.log(responseText);
//     });