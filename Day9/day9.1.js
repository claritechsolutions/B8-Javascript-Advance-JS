const numbers = ["Mumbia","Pune","Satara","Sangli"];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>"; 
}
/*map*/
const array1=[2,4,6,8]
const test=array1.map((num)=>num*2)
document.getElementById("demo1").innerHTML="This is arraymap :"+test;
/*filter*/
const array2= [45, 4, 9, 16, 25];
const age = array2.filter((value)=>value>18);

document.getElementById("demo2").innerHTML = "This is filter :"+age;
/*reduce*/
const array3=[45,68,98];
const add =array3.reduce((addition)=>addition+5);
document.getElementById("demo3").innerHTML="This is reduce :"+add

/*every*/
 let values = [8,7,6,4,20];
 const belowValue =values.every ((currentValue) => currentValue>18);
 document.getElementById("demo4").innerHTML="This is every :"+belowValue
// console.log(values.every(belowValue));

/*indexOf*/
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

document.getElementById("demo5").innerHTML = "Apple is found in position " + position;
