// //How to empty Array 
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
//method 1
arrayList = new Array();
console.log(arrayList);

// //method 2
arrayList.length = 0;
console.log(arrayList);

// //method 3

arrayList.splice(0, arrayList.length);
console.log(arrayList);


// //Check the number is int

function isInt(num) {
    return num % 1 == 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false

// //To check number is float
function isInt(num) {
    return num % 1 != 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false

// . Explain what a callback function is and provide a simple example.


function modifyArray(arr, f1) {
    // do something to arr here
    arr.pop();
    // then execute the callback function that was passed
    f1();
}

var dhanu = [1, 2, 3, 4, 5];

modifyArray(dhanu, function() {
    console.log("array has been modified", dhanu);
});

// function add(){

// }
// add();