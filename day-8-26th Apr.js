var arr1 = ["Assamese", "Bengali", "Dogri|", "Gujarati", "Hindi", "Kashmiri", "Konkani"];
var arr2 = ["Marathi", "Nepali", "Oriya", "Punjabi", "Sanskrit", "Sindhi", "Urdu"];

arr1.splice(2, 2);
arr1.toString();
console.log(arr1.join("-"));

arr1.splice(3, 0, "Dogri", "Marathi");
console.log(arr1);

//replace items

// const start= -2;
// const replaceitems= 3;
// const remitems= arr1.splice(start,replaceitems,"Sanskrit", "Sindhi", "Urdu");
// console.log("Replaced items",remitems);
// console.log(arr1);

for (let index = 0; index < 3; index++) {
    const element = arr1[index];
    console.log("Language -->", element);
}

arr2.forEach((element, index) => {
    if (index < 5) {
        console.log("Index=>", index, "--> Language=>", element);
    }
})

for (const lang of arr2) {
      console.log("Language ===>", lang);
    }
    
    // Merge multiple array together - CONCAT

    const combiarray= arr1.concat(arr2);
    console.log('--------------------------------');
    console.log("combined languages=>", combiarray);

    // copy of an array

    const copyArr1 = [...arr1];
    copyArr1.splice(-2, 2, "Panjabi", "Sanskrit")
    console.log("Original array -->", arr1);
    console.log("copy of first array -->", copyArr1);
    
    // copy of array with deepcopy

    const arr2DeepCopy=JSON.parse(JSON.stringify(arr2));
    console.log("Deepcopy of second array:=>", arr2DeepCopy);
     
