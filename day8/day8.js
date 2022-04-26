const developerPosition = ["java developer", "Asp developer", "php developer", "ios developer", "backend developer"];

//remove a single item by its index

//const start=(developerPosition.indexOf("php developer"));
//const deleteCount=2;
//developerPosition.splice(start,deleteCount)
//console.log(developerPosition);

//multiply add at specified indx
//developerPosition.splice(2,0,"ui developer");
//console.log(developerPosition);

/*Replace Multiple items in array*/
//const start=-2;
//const deleteCount=2;
//const removeitems=developerPosition.splice(-2,2,"node developer","gui developer");
//console.log("removeitems-->",removeitems);
//console.log("developerposition-->",developerPosition);

//for (let index=0;index<3;index++)
//{
//  const element=developerPosition[index];
//console.log("element-->" ,element);

//}

//developerPosition.forEach((element, index) => {

  //  if (index < 3) {
    //    console.log("index-->", index, "-->element-->", element);
   // }
//})

//for (const developer of developerPosition)
//console.log("developer Position-->",developerPosition);

//merge multiple array together

//const extraposition=["gr developer","full stack developer"];
//const combinedposition= developerPosition.concat(extraposition);
//console.log("developerposition-->",developerPosition);
//console.log("extraposition-->",extraposition);
//console.log("combinedposition-->",combinedposition);

//copy an array
//const copyDeveloperPosition=[...developerPosition];
//copyDeveloperPosition.splice(-2,2,".net developer","c developer");
//console.log("developerPosition-->",developerPosition);
//console.log("copydeveloperposition",copyDeveloperPosition);

//console.log("combinedposition-->",copyDeveloperPosition);

//copy an array with deepcopy

const developeerdeepcopy=JSON.parse(JSON.stringify(developerPosition));
console.log("developerdeepcopy-->",developeerdeepcopy);





