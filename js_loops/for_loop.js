//***FOR-EACH*******/
var a = ["payal", "rashmi","dolly","shivansh"];

a.forEach(element => {
a.pop(1);
});

// a.forEach(function(value,index) {
//   console.log(index,value);
// });



//*******FOR-OF*******/
//for..of use for Iterable Collections like array..
//for..of we can use with Arrays and string not with objects.

//it will give error you can not reassign a varible if you are using const
//here you can not use value to perform operation because its constant.

// const iterable = [10, 20, 30];
// for (const value of iterable) {
//   let value1 = value +1;
//   console.log(value1);
// }

//You can use let instead of const too, if you reassign the variable inside the block.

// const iterable1 = [10, 20, 30];
// for (let value of iterable1) {
//   value = value +1;
//   console.log(value);
// }

// //Iterating over a String
// const iterable2 = 'boo';
// for (const value of iterable2) {
//   console.log(value);
// }

//*******For-IN********/
//for..in is a method for iterating over "enumerable" properties of an object.
//However, it is generally advised that for..in not be used with Arrays.
//for..in we can use with objects not advised to use with string and array.

// const obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	d: 4
// }

// for (const key in obj) {
// 	console.log( obj[key] )
// }