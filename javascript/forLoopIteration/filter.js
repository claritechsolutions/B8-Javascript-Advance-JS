const arr = [2, 46, 7, 3, 21, 53, 56, 23, 29];

//display number is greater than 23
console.log("-----------------number is greater than 23:---------------------")
const newArr = arr.filter(number => number >= 23);
console.log(newArr);
//display number is less than 23
console.log("--------------------number is less than 23:--------------------------")
const newArr2 = arr.filter(number => number < 23);
console.log(newArr2);

//display even numver
console.log("-------------------Even number are-------------------------------")
const evenNum = arr.filter(number => {
    if (number % 2 == 0) {
        console.log(number);
    }
})