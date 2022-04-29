/*Array to iterate*/
const teachers = ["science teacher","maths teacher","english teacher","history teacher","gio teacher"];

teachers.forEach( teachers => {

    if(teachers=="maths teacher"){
        console.log("maths teacher");

    }
    else if(teachers=="history teacher")
    {
        console.log("gio techer");

    }
    
});
console.log("-------------------------------");
/*every*/


//const latestvalue =(currentvalue)=> currentvalue.price>50;

//const price=[60,53,60,55,70,55,80];
//console.log(price.every(latestvalue));

/*without for each*/
//const justvalue =(age) => age.value > 18;
//const value=[50,34];
 
//if(value.every(justvalue))
//{
  //  console.log("evryone is adults");

//}
//else{

  //  console.log("some of them is minors");

//}



//const belowValue = (currentValues) => currentValues.age != 100;
 //const values = [101];
 //console.log(values.every(belowValue));
const values=[30,40,50];
 let minorCount = 0;
 let adultCount = 0;
 values.forEach((value) => {
   if (value > 18) {
     adultCount++; // 1, 2, 3, 4, 5
     console.log(adultCount);
   } else {
     minorCount++; // 1
   }
 });

 console.log("-------------------------------");

 if (minorCount > 0) {
    console.log("someof them are minors");
  } else {
    console.log("everyone are adults");
  }

//

console.log("-------------------------------");

 var colors = ['red', 'blue', 'green'];

colors.forEach(function(color){
  console.log(color);
});

console.log("-------------------------------");
var colors = ['red', 'blue', 'green','mango'];
colors.forEach(colors => {
    if(colors!='blue'){
        console.log("is available");
    }
    else{
        console.log("is not");
    }
    
});

console.log("----------------------------------------");

const developerPositions1 = ["React Developer", "iOS Developer", "Java Developer", "Php Developer", "Backend Developer", "ABC", "DEV"];

let dev=developerPositions1.filter((element,index)=>{

if(developerPositions1.includes("DEV")){

console.log(element);
element="abcd";
console.log(element);
return element;


}

});
console.log("developerPositions1 -->", developerPositions1)
 console.log("Devs -->", dev);


 //distructing array

 let array={
     data:[
            {
             age:20,
             name:"priya",
            },
            {
                age:30,
                name:"siya",
            },

            {
               age:40,
               name:"bia",
            },

     ],
       page:1,
       details:"xyz",
       address:"Abc",  

 };

 let {data,page, details}=array;
console.log(data);
console.log(page);
console.log(details);
