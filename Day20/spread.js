let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

let arr = [1, 2, 3];
let arr1 = [...arr]; // like arr.slice()

arr1.push(4);
console.log(arr1)

let arr2 = [0, 1, 2];
let arr3 = [3, 4, 5];

arr2= [...arr3, ...arr2];
console.log(arr2)