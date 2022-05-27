//example 1: program with promise
var a = 2;
let result = new Promise((resolve, reject) => {
    if (a == 2) {
        resolve("a is equal to 2");
    }
    else {
        reject("a is not equal to 2");
    }
})

//below are the ways to write .then() and .cath() but option 1 is good for single line
//and option 2 is good for multiline with minimun code.
//option 1:
//with single line arrow function without curly braces and paranthesis
// result.then(success=>console.log(success))
// .catch(error=>console.log(error));

// //option 2:
// //with arrow function with curly braces for multiline code
// result.then((success)=>{console.log(success)})
// .catch((error)=>{console.log(error)});

// //option 3:
// //with normal function and function name
// result.then(function yes(success){console.log(success)})
// .catch(function no(error){console.log(error)});

// //option 4:
// //with normal function without function name
// result.then(function(success){console.log(success)})
// .catch(function(error){console.log(error)})

// //option 5:
// //with arrow function with function name
// result.then(yes = (success)=>{console.log(success)})
// .catch(no = (reject)=>{console.log(reject)});

