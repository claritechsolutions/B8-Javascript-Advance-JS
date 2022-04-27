let number=""
for(let i=0;i<6;i++){
    //console.log(i);
    number+="Number is"+i+ "<br>";
}
document.getElementById("demo").innerHTML=number;
 let text=""
 let i=0
 while(i<10){
     text+="This number is"+i+"<br>"
     i++;
     //console.log(i);
 }
 document.getElementById("demo1").innerHTML=text;

/* let check = ""
let i =0;

do {
  check+= "<br>The number is " + i;
  i++;
}
while (i < 10);  

document.getElementById("demo2").innerHTML = check;*/