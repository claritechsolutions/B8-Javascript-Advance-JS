const cars =['bmw','tata','oudy','tata','farari'];

// By using for loop
// let text = '';
// for (let a = 0;a< cars.length ;a++){
//     text += cars[a];
// }
// console.log(text);

// By using while loop
// let user = '';
// let i = 0;
// while(i<10){
//     user  += i; ++i;
// }
// console.log(user);

// By using break
let user = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  user += i;
}

console.log(user);
//  by using continue
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
console.log(text);