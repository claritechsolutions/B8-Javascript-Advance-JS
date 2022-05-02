//**using map */
// const names = ['irish', 'daisy', 'anna'];
// const upper = names.map(name => {
//     return name.toUpperCase();
// });
// console.log(upper);


//**using for */
// const upper1 = "";
// for (var i = 0; i < names.length; i++) {
//     names[i].toUpperCase();
// }
// console.log(names);

//**using forEach */
var names = ['irish', 'daisy', 'anna'];
const newarr = [];
names.forEach(name => {
    newarr.push(name.toUpperCase());

});
console.log(newarr);