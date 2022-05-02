// Write a JavaScript program to find the most frequent item of an array.

// Sample array: var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output: a ( 5 times)

const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count = 0,
    count1 = 1,
    value;
for (let i = 0; i <= arr1.length; i++) {
    for (var j = i; j <= arr1.length; j++) {
        if (arr1[i] === arr1[j])
            count++;

        else if (count1 < count) {
            count1 = count;
            value = arr1[i];
        }
    }
    count = 0;
}
console.log(value, "(", count1, "times)");

// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// var dmax_frequency, counter, item, [dmax_frequency, counter] = [1, 0]
// for (i of(arr1 + 1)) {
//     for (var j = i; j < arr1.length; j++) {

//         if (arr1[i] === arr1[j])
//             counter++;
//         if (dmax_frequency < counter) {
//             dmax_frequency = counter;
//             item = arr1[i];
//         }
//     }
//     counter = 0;
// }
// console.log(`${item} = ${dmax_frequency} times`);

// Write a JavaScript program which prints the elements of the following array.

// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

array = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
]

class arrayFunction {
    constructor(arrayName) {
        console.log("hello World")
        this.array1 = arrayName;
        // console.log(this.array1)


    }
    arrayAccess() {
        // console.log(this.array1)
        for (let i in this.array1) {

            console.log("row", i)
            for (let j in this.array1[i]) {
                console.log("", this.array1[i][j])
            }
        }
    }
}
let a = new arrayFunction(array);
a.arrayAccess();