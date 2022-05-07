// import { name, Arithmetic, Addition, Substraction } from './library.js';
import * as test from './library.js';
console.log(`hello my name is: ${ test.name }`);
let a = new test.person("dhanu", 20, 20000);
a.getinfo();
test.Addition(10, 20);
test.Substraction(30, 10);