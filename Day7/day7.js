const city=["Mumbai","Pune","Satara"];
const city1=["Sangli","Kolhapur"];
const city2=city.concat(city1);
document.getElementById("demo").innerHTML=city2;

const myArray = ["Emil", "Tobias", "Linus"];
const myChildren = myArray.concat("Peter"); 
document.getElementById("demo1").innerHTML = myChildren;
//console.log(myChildren);
/*Remove single item by its index*/
const branch=["cse","entc","mech","civil","electrical"]
const start=branch.indexOf("mech");
const deleteCount = 1;
branch.splice(start, deleteCount);
 console.log("branch -->", branch);
 /**
 * Replace Multiple items in array
 */
  const developer = ["React Developer", "iOS Developer", "Java Developer", "Php Developer", "Backend Developer"];

  const start = -2;
  const deleteCount = 2;
  const removeItems = developer.splice(start, deleteCount, "NodeJS Developer", "Mern Developer");
   console.log("removeItems -->", removeItems);
  console.log("developer -->", developer);
    /**
 * Copy an Array --> [...Array]
 */
  const tools=["vscode","eclipse","turboc"]
  const copytools=[...tools]
  copytools.splice(-2, 2, "github", "bitbucket");
  console.log("tools -->", tools);
 console.log("copytools -->", tools)
console.log("copyExtraPositions -->", copytools);
/**
 * Copy an Array with DeepCopy -->
 */
 const device=["mobile","tablet","laptop"]
 const DeveloperDeepCopy = JSON.parse(JSON.stringify(device));
 console.log("DeveloperDeepCopy -->", DeveloperDeepCopy)
 /**array Interate */
 for (let index = 0; index < 3; index++) {
       const element = tools[index];
       console.log("element -->", element);
     }