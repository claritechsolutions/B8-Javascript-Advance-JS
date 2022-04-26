
let topCompnays = [ "Capgemini", "Infosys", "Accenture", "Cognizant","Wipro", "HCL Technologies", "Tata Consultancy Services", "Flipkart", "Amazon"];
let company=["Forix", "SPINX Digital"];
document.write("<ul>");
for(var a=0; a<=8; a++)
document.write("<li>" +topCompnays[a]+ "</li>"+ "</br>");
document.write("</ul>");


// // document.write("<br>")
// // document.write("pop()"+"<br><br>")
// // document.write(topCompnays+"<br><br>");
// // document.write(topCompnays.pop()+"<br><br>");
// // document.write(topCompnays+"<br><br>");
// // document.write(topCompnays.pop()+"<br><br>");
// // document.write(topCompnays+"<br><br>");


// // document.write("<br><br>")
// // document.write("push()"+"<br><br>")
// // document.write(topCompnays + "<br><br>");
// // document.write(topCompnays.push('IBM')+ "<br><br>");
// // document.write(topCompnays + "<br><br>");
// // document.write(topCompnays.push('Oracle')+ "<br><br>");


// // document.write("<br><br>")
// // document.write("Shity()"+"<br><br>");
// // document.write(topCompnays+ "<br><br>");
// // document.write(topCompnays.shift()+ "<br><br>");
// // document.write(topCompnays.shift()+ "<br><br>");
// // document.write(topCompnays+ "<br><br>");

// // document.write("<br><br>")
// // document.write("Unshift()"+"<br><br>")
// // document.write(topCompnays+ "<br><br>");
// // document.write(topCompnays.unshift("Dell")+ "<br><br>")
// // document.write(topCompnays+ "<br><br>");

// // document.write("<br><br>")

// // document.write("Join()"+"<br><br>")
// // document.write(topCompnays+ "<br><br>");
// // document.write(topCompnays.join("  ---  ")+ "<br><br>")
// // document.write(topCompnays+ "<br><br>");
// // document.write(topCompnays.join(" ~~~~ ")+ "<br><br>")

// // document.write("<br><br>")
// // document.write("Contact()"+"<br><br>")
// // document.write(topCompnays+ "<br><br>");
// // document.write(topCompnays.concat("Forix", "SPINX Digital")+ "<br><br>");
// // document.write(topCompnays+ "<br><br>");

// // document.write("<br><br>")
// // var a=["a","b"];
// // var b=["c","d"];
// // var c= (a).concat(b);
// // document.write(c);

// document.write("<br><br>")
// document.write("Slice(Start, end)"+"<br><br>")          //It add/remove elements to/from the given array.
// document.write(topCompnays+ "<br><br>");
// document.write(topCompnays.slice(1,4)+ "<br><br>");
// document.write(topCompnays.slice(5,6)+ "<br><br>");
// document.write(topCompnays.slice(1)+ "<br><br>");
// document.write(topCompnays.slice(3)+ "<br><br>");
// document.write(topCompnays.slice(-1)+ "<br><br>");
// document.write(topCompnays.slice(-4)+ "<br><br>");
// document.write(topCompnays.slice(-5,-2)+ "<br><br>");
// document.write(topCompnays+ "<br><br>");

// document.write("<br><br>")
// document.write("Splice(index, how many delete,new value)"+"<br><br>")
// document.write(topCompnays+ "<br><br>");
// document.write(topCompnays.splice(2,1 ,"Forix", "SPINX Digital")+ "<br><br>");
// document.write(topCompnays+ "<br><br>");


// document.write("<br><br>")
// document.write("indexO() Search item stratr"+"<br><br>");
// document.write(topCompnays+ "<br><br>");
// document.write(topCompnays.indexOf("Wipro")+ "<br><br>");
// document.write(topCompnays.indexOf("Cognizant")+ "<br><br>");
// document.write(topCompnays+ "<br><br>");


// document.write("<br><br>")
// document.write("LastindexO() Search item stratr"+"<br><br>");
// document.write(topCompnays+ "<br><br>");
// document.write(topCompnays.lastIndexOf("Wipro")+ "<br><br>");
// document.write(topCompnays.lastIndexOf("Flipkart")+ "<br><br>");
// document.write(topCompnays+ "<br><br>");



// document.write("<br><br>")
// document.write("LastindexO() Search item stratr"+"<br><br>");

// document.write(topCompnays.toString()+ "<br><br>");


// document.write("<br><br>")
// document.write("Reverse() Search item stratr"+"<br><br>");
// document.write(topCompnays+ "<br><br>");
// document.write(topCompnays.reverse()+ "<br><br>");



document.write("<br><br>")
document.write("include(Search Item)"+"<br><br>");  // 	It checks whether the given array contains the specified element.
document.write(topCompnays+ "<br><br>")
document.write(topCompnays.includes("Infosys")+ "<br><br>");  // True 
document.write(topCompnays.includes("Afgt")+ "<br><br>");   // false

document.write("<br><br>")
document.write("Sort())"+"<br><br>");   //It returns the element of the given array in a sorted order.
document.write(topCompnays+ "<br><br>")
document.write(topCompnays.sort()+ "<br><br>");  


document.write("<br><br>")
document.write("Lengh()"+"<br><br>");  //
document.write(topCompnays+ "<br><br>")
document.write(topCompnays.length + "<br><br>");   // find the lengh - each string consider 1 count as ottal is 9 


document.write("Value()"+"<br><br>");             // It creates a new iterator object carrying values for each index in the array.
document.write(topCompnays.values()+ "<br><br>"); 



document.write("<br><br>")
document.write("fill()"+"<br><br>");  //
document.write(topCompnays+ "<br><br>")
document.write(topCompnays.fill("Java") + "<br><br>");   // It fills elements into an array with static values.


document.write("<br><br>")
document.write("DeepCopy()"+"<br><br>");  //
document.write(topCompnays+ "<br><br>")

document.write("Copy all top Company"+ JSON.parse(JSON.stringify(topCompnays)));   // It fills elements into an array with static values.


// document.write("<br><br>")
// document.write("Some()"+"<br><br>"); 
// var a=[10, 2, 18, 4 ]                 // true- at least one value or one condtion get true - then retun true            
 
// document.write(a.some(voteelg)+ "<br><br>")   //It determines if any element of the array passes the test of the implemented function


// function voteelg(age)// parameter                  
// {

//     return age>=18;

// }



// document.write("<br><br>")
// document.write("Every()"+"<br><br>"); 
// var a=[30, 25, 18, 20 ]                 // True= need ever pass elemrnt need the is pass then condition is pass or else is false.         
 
// document.write(a.every(voteelg)+ "<br><br>")   //It determines if any element of the array passes the test of the implemented function


// function voteelg(age)// parameter                  
// {

//     return age>=18;

// }


document.write("<br><br>")
document.write("Find()"+"<br><br>"); 
var a=[10, 25, 18, 20 ]                 // Onec get the first condition is pass then he not goes to check for next cotion        
 
document.write(a.find(voteelg)+ "<br><br>")   //It returns the value of the first element in the given array that satisfies the specified condition.


function voteelg(age)// parameter                  
{

    return age>=18;

}

document.write("<br><br>")
document.write("FindIndex()"+"<br><br>"); 
var a=[10, 2, 18, 20 ]                 // Onec get the first condition is pass thenit return the index value of first pass element    
 
document.write(a.findIndex(voteelg)+ "<br><br>")   //It returns the index value of the first element in the given array that satisfies the specified condition.

function voteelg(age)// parameter                  
{

    return age>=18;

}




document.write("<br><br>")
document.write("Filter()"+"<br><br>"); 
var a=[10, 2, 18, 20 ]                 // Every true element make it array and dispaly the output
 
document.write(a.filter(voteelg)+ "<br><br>")   //It returns the new array containing the elements that pass the provided function conditions.

function voteelg(age)// parameter                  
{

    return age>=18;

}







// let color= [
    
//     [ "Pranali " ,25, "Web Developer","7 Year"],
//     [ "Omkar ", 26,"Wordpress Developer","4year"],
//     [ "Priya ",28, "java developer","5 year"],
//     [ "Sourav ",29],
//     [ "Medha ", 30],
// ]
// document.write("<tabel border='1px'>");
// for(var a=0; a<5; a++)
// { 
//     document.write("<tr>");
//     for(var b=0 ;b<5; b++)
//     {
//         document.write("<td>" +color[a][b]+ "</td>");

//     }
//     document.write("</tr>");
//     document.write("<br>");
// }





