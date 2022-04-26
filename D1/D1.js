const cities=["solapur", "pune" ,"Mumbai", "kolhapur","Satara"];
document.getElementById("demo").innerHTML= "Default array--> "+cities;
// to string 
const tostring =cities.toString();
document.getElementById("demo1").innerHTML="To string Method --> " + tostring;
//  Join
const Join= cities.join(" ");
document.getElementById("demo2").innerHTML="Join Method -->"+" " + Join;
// index method
const index=cities[0];
document.getElementById("demo3").innerHTML="Index method --> "+ index;
const x= cities.length;
const y=cities[x-1]
document.getElementById("demo4").innerHTML= "length --> " + x +" last element is " + y ;
// find arry item in index
const z= cities.indexOf("solapur")
document.getElementById("demo5").innerHTML = " Solapur on --> " + z + " index";
// pull and push
const a=cities.push("Pandharpur")
document.getElementById("demo6").innerHTML ="Push --> "+ cities ;
// pull
const b=cities.pop();
document.getElementById("demo7").innerHTML =" pop --> " + b;
// splice
// const c=JSON.parse(cities)
const start_number=2;
const delete_count=0;
cities.splice(2,0,"sangola","sangli","indapur")
document.getElementById("demo8").innerHTML="  adding Multiple cities  --> " + cities;
cities.splice(4,3)
document.getElementById("demo9").innerHTML="Removing more than one city--> "+ cities;
cities.splice(1,2,"Thane","Nagpur");
document.getElementById("demo10").innerHTML="reolacing item --> "+ cities;
const citie=["solapur", "pune" ,"Mumbai", "kolhapur","Satara"];
const c =citie.slice(1,4,2)
document.getElementById("demo11").innerHTML="Slicing arry one after one --> "+c;
const d= citie.slice(-5,-2);
document.getElementById("demo12").innerHTML="negative slicing --> "+ d;





