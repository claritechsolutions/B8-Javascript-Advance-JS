var a = 100;
var b = 10;
document.getElementById("result").innerText=data;
document.write(data);
function addition(){
    c = a + b;
    var inText = document.getElementById("result").innerText = c;
//console.log(innerText);
}
function substraction(){
    c = a - b;
    var inText = document.getElementById("result").innerText = c;
console.log(innerText);
}
function multiplication(){
    c = a * b;
    var inText = document.getElementById("result").innerText = c;
console.log(innerText);
}
function division(){
    c = a / b;
    var inText = document.getElementById("result").innerText = c;
console.log(innerText);
}
function remainder(){
    c = a % b;
    var inText = document.getElementById("result").innerText = c;
console.log(innerText);
}
function eval(){
    c=(a*b)+b;
    var inText = document.getElementById("result").innerText = c;
    console.log(innerText)
}