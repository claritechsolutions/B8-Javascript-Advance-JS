const array = ['red','pink','blue','black','white'];
const array2 = ["venue","swift","alto","thar"]
// // By using sort()
// array.sort();
// console.log(array);
// ----------------*******----------******----------------------------
// // by using reverse()
// array.reverse();
// console.log(array);
// --------------*******----------******---------------------------
// // by using pop()
// array.pop();
// console.log(array);
// --------------*******----------******---------------------------
// by using push()
// array.push("orange");
// console.log(array);
// --------------*******----------******---------------------------
//  by using shift()
// array.shift();
// console.log(array);
// --------------*******----------******---------------------------
// by using unshift()
// array.unshift("orange");
// console.log(array);
// --------------*******----------******---------------------------
// by using concat()
// var b = array.concat(array2);
// console.log(b);
// --------------*******----------******---------------------------
//  by using join()
// array.join("&");
// var b= array.join("&");
// console.log(b);
// --------------*******----------******---------------------------
//   by using slice()
// var b=array.slice(2);
// console.log(b);
// --------------*******----------******---------------------------
//  by using splice()
// array.splice(2,0,"orange");
// console.log(array);
// --------------*******----------******---------------------------
//  by using index of
// let b =array.indexOf("white");
// console.log(b);
// --------------*******----------******---------------------------
//  b using lastindex of()
// var b = array.lastIndexOf("pink");
// // console.log(b);
// --------------*******----------******---------------------------
// by using includes()
// let b= array.includes("pink");
// console.log(b);
// it's result is true
// let b= array.includes("gray");
// console.log(b);
// it's result is false
// -------------*******-------------********----------------------
// //  by using some()
// // in some() only one value is cheak with condition and give result
 var a =[10,15,23,40];
// var b =a.some(checkadult);
// function checkadult(age){
//     return age >= 18;
// }
// console.log(b);
// --------------******---------------*********-----------------------
// by using every()
// in every() each and evry value of array was checked with given condition if all vallues are match with condition then result was true anotherr reselt was false
// var b =a.every(checkadult);
// function checkadult(abc){
//     return abc>= 18;
// }
// console.log(b);
// --------------*********----------------**********----------------
// by using find()
// var b = a.find(check);
// function check(age){
//    return age>=18
// }
// console.log(b);
// ---------------******-----------*********-------------------------
//  by find index
// var b = a.findIndex(checkAge);
// function checkAge (xyx){
//     return xyx >= 18;
// }
// console.log(b);
// ---------------*****-------------*********------------------------
//  by using filter
// var b = a.filter(checkAge);
// function checkAge(age){
//     return age >= 18;
// }
// console.log(b);
// ----------------*********-------------*****-----------------------
// by using for each
// var b = a.forEach(loop);
// function loop(age){
//     console.log(age);
// }
// // if value is Backend Developer then show Backend Developer on Console, if React Developer then show UI developer
const developerPositions = ["React Developer", "iOS Developer", "Java Developer", "Php Developer", "Backend Developer", "ABC", "DEV"];
developerPositions.forEach(chexk);
function chexk(age){
    if (age == "Backend Developer") {console.log("backend developer");}
    else (age == "react developer") ;{console.log("Ui developer");}
};
