// 3. Write a JavaScript function to get the first element of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []
// function first(array, count) {
//     var arr = [];
//     if (count == undefined) {
//         return array[0];
//     }
//     if (array.length < count) {
//         count = array.length;
//     }
//     for (let i = 0; i < count; i++) {
//         arr[i] = array[i];
//     }
//     return arr;
// }
// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// Write a JavaScript function to get the last element of an array.
//  Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]


// function last(array1, count1) {
//     if (array1 == null) {
//         return 0;
//     } else if (count1 == null) {
//         return array1.pop();
//     } else if (count1 > 0) {
//         return array1.slice(-count1);
//     }
// }
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));


// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0 - 254 - 6 - 8.


var num = 21643468;
var str1 = num.toString();
var res = [str1[0]];
for (var i = 1; i <= str1.length; i++) {
    if (str1[i - 1] % 2 === 0 && str1[i] % 2 === 0) {
        res.push('-', str1[i]);
    } else {
        res.push(str1[i]);
    }
}
console.log(res.join(''));