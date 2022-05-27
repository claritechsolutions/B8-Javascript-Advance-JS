
//***normal function***
//normal function with total variable here return value comes into the total.
// var total = function(a,b){
//     var c = a + b;
//     return c;
// }
// console.log(total(2,3));

//normal function without variable here return value comes into the sum.
// function sum(a,b){
//     var z;
//     z = a + b;
//     return z;
// }
// console.log(sum(2,4));

//normal function without retun
// function sum() {
//     let a = 5;
//     let b = 6;
//     let c;
//     c = a + b;
//     console.log(c);
// }
// sum();


//***arrow function***
//Arrow Function has 2 returns implicit and explicit return
//below is the example of explicit return reuired curly braces {}
//we can decleare varibale inside it
// let sum = (a,b) => {
//     var c = a + b;
//     return c;
// }
// console.log(sum(2,5));

//arrow function can ommit paranthesis() if it has only one paranthesis ()
// let sum = (a) => {return a;} //a with paranthesis is also valid
// let sum1 = a => {return a;} // a without paranthesis is also valid
// console.log(sum(7));
// console.log(sum1(8));

//below is the example of implicit return required paranthesis () instead of curly braces.
//we can not declear varibale inside it
// var z;
// let sum = (a,b) => (
//     z = a + b
// )
// console.log(sum(2,3));

