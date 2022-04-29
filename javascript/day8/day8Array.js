// const arr = ['bread', 'toast', 'sandwitch', 'cookies'];

//**remove single item by index

// const start = arr.indexOf('sandwitch');
// const delcn = 1;
// arr.splice(start, delcn);
// console.log("Array is:", arr);

//**multiple add at specified index

// console.log("Original array is:", arr);
// arr.splice(2, 1, "biscuites", "brown bread");
// console.log("New Array is:", arr);

//**replace multiple items in array

// console.log("Original array is:", arr);
// const start1 = 1;
// const delcn1 = 2;
// const remove_items = arr.splice(start1, delcn1, 'samosa', 'vadapav');
// console.log("New Array is:", arr);

// **iterate Array

// console.log("original Array is:", arr);
// for (let i = 0; i < arr.length; i++) {
//     const arr1 = arr[i];
//     console.log("items is:", arr1);
// }

// const developerPositions = ['react', 'ios', 'php', 'backend', 'ui'];
// developerPositions.forEach((deve) => {
//     if (deve === 'backend' || deve === 'ui') {
//         console.log(deve);
//     }
// });
// const belowValue = (currentValue) => currentValue < 45;
// let values = [1, 5, 10, 45, 60, 100];
// console.log(values.every(belowValue));


//***forEach()

// arr.forEach((arr1, i) => {
//     if (i < arr.length) {
//         console.log("index of item", i, "item name is:", arr1);
//     }
// })
// for (const snack of arr) {
//     console.log("Snack is:", snack);
// }

//** Merge multiple array together*/
// console.log("original array is", arr);
// const new_item = ['bhurji pav', 'cream Roll', 'kachori'];
// const newArr = arr.concat(new_item);
// console.log("newly added", new_item);
// console.log("merged Array is:", newArr);

// **copy array

// const copyArray = [...arr];
// copyArray.splice(2, 0, 'chocochips', 'chocolate');
// console.log("original array is:", arr);
// console.log("spliced array is:", copyArray);

// **Copy an array with deep copy

// const deepcopy = JSON.parse(JSON.stringify(arr));
// console.log("Copy of array is:", deepcopy);
// deepcopy.splice(2, 0, 'abc', 'vcf');
// console.log("spliced array is:", deepcopy);