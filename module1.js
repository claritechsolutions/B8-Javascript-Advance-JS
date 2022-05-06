// import {test,hello,user as us} from "./module.js"
//  all files are import with * and use what u want
import * as fun from "./module.js"
// console.log(test);
document.body.innerHTML= fun.test;


fun.hello("prajakta");
let a = new fun.user();


//  by default
import {default as prajakta} from "./module.js"
prajakta();