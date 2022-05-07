// Array Iteration 8 methods:

/*****forEach*****
syntax : array.forEach(function(currentValue, index, arr), thisValue)
using function but prefer this one because we can use this keyword here.
The forEach() method calls a function for each element in an array.
forEach() is used to execute the same code on every element in an array 
but does not change the array and it returns undefined.*/

const arr = [1,2,3];
// arr.forEach(function(element, index){
//     console.log(element +" having "+ index);
// });

// //using arrow
// arr.forEach((element,index) => {
//     console.log(element +" having "+ index); 
// });

const check = arr.forEach(myFunction);
function myFunction(number){
    return number;
}
console.log(check);

const ages = [3, 10, 18, 20];
const result = ages.every(checkAdult);
function checkAdult(age) {
  return age > 18;
}
console.log(result);