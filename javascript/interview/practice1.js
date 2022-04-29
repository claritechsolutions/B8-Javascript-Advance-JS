//**How to empty Array 
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
//method 1
arrayList = new Array();
console.log(arrayList);

//method 2
arrayList.length = 0;
console.log(arrayList);

//method 3

arrayList.splice(0, arrayList.length);
console.log(arrayList);


//**Check the number is int

function isInt(num) {
    return num % 1 == 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false

//To check number is float
function isInt(num) {
    return num % 1 != 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false

//**  Explain what a callback function is and provide a simple example.
function modifyArray(arr, f1) {
    // do something to arr here
    arr.pop();
    // then execute the callback function that was passed
    f1();
}

var Practice = [1, 2, 3, 4, 5];

modifyArray(Practice, function() {
    console.log("array has been modified", Practice);
});

function add() { //function declaration

}
add(); //calling function

//**reverse a string
//method 1
const str = "welcome world";
const str1 = str.split("");
console.log(str);
const str2 = str1.reverse();
console.log(str2);
const str3 = str2.join("");
console.log("Reverse String is==>", str3);
// console.log(str.split("").reverse().join(""));  //reverse in one statement
//method 2 using for loop
var newstring = "";
for (let i = str.length - 1; i >= 0; i--) {
    newstring += str[i];
}
console.log("Using for loop reverse string:", newstring);


//what will be the output of program
var y = 1;
if (function f() {}) {
    y = typeof f;
}
console.log(y);