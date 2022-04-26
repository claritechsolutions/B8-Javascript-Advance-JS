
const sub =["Marathi","English","Mathematics","Hindi"];
document.getElementById("demo").innerHTML=sub.toString();
//console.log(sub.toString());

const subject =["Marathi","English","Mathematics","Hindi"];
document.getElementById("demo1").innerHTML=subject.join("*");
//console.log(subject.join("*"));

const fruits = ["Pen", "Pencil", "marker","sketchpen"];
document.getElementById("demo2").innerHTML = fruits;
fruits.pop();
document.getElementById("demo3").innerHTML = "This is pop:"+fruits;
//console.log("this is pop",fruits);

const campass = ["Pen", "Pencil", "marker"];
document.getElementById("demo4").innerHTML = campass;
campass.push("sketchPen");
document.getElementById("demo5").innerHTML = "This is push:"+campass;
//console.log("this is push",campass);

const states = ["Maharashtra", "Punjab", "Gujrat","Telangana"];
document.getElementById("demo6").innerHTML = states;
states.shift()
document.getElementById("demo7").innerHTML = "This is shift:"+states;
//console.log("this is shift",states);

const country = ["Austrelia","shrilanka","United Kingdom"];
document.getElementById("demo8").innerHTML = country;
country.unshift("India")
document.getElementById("demo9").innerHTML = "This is unshift:"+country;
/*to change elelments
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits[0] = "Kiwi";
document.getElementById("demo2").innerHTML = fruits;

to delete -->
document.getElementById("demo2").innerHTML =
"The first fruit is: " + fruits[0];*/
const device = ["Mobile", "Tablet", "Laptop", "Notepad"];
document.getElementById("splice").innerHTML = device;
device.splice(-2);
document.getElementById("splice1").innerHTML = device;






