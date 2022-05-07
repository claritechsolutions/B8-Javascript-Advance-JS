/*****map*****
syntax : array.map(function(currentValue, index, arr), thisValue)
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() executes the same code on every element in an array and returns a new array with the updated elements.*/

const arr1 = [2,3,4];
arr1.map(function(element){
    let mul = element*2;
    console.log(mul);
});

//using return
const c = arr1.map(function(element){
    return element*2;
});
console.log(c);

//example
const arr4 = [7,5,4];
const mapfun = arr4.map(myFunction);
function myFunction(a,b) {
  return a+b;
}
console.log(mapfun);

/*explaination of map function
here a is current value and b is indexe
so in 1st case : a=7 and b=0 return=7+0=7;
so in 2nd case : a=5 and b=1 return=5+1=6;
so in 1st case : a=4 and b=2 return=4+2=6;*/

//example of forEach and array.map for uppercase

// let text = ['irish','daisy','anna'];

// const text1 = text.map(function(element){
// let result = element.toUpperCase();
// console.log(result);
// });

// const text2 = text.map(function(element){
// return element.toUpperCase();
// });
// console.log(text2);

// const text3 = text.forEach(function(element){
//     let result = element.toUpperCase();
//     console.log(result);
// });
