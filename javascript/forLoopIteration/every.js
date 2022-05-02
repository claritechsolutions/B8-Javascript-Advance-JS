// 
const arr = ['ddd', 'aaa', 'sss', 'bbb', 'ggg', 'nnn'];
var name = (name1 => name1 === "ddd");
console.log(arr.every(name)); //checkes whether all elements in array satisfy the condition

// ** checking Number is even
var arr1 = [56, 92, 18, 88, 12];
const even = (number => number % 2 == 0);
console.log(arr1.every(even));

let age = ['20', '16', '25', '30'];
let ageCheck = age.every(value => value > 20);
console.log(ageCheck);