
/****Filter****
syntax : array.filter(function(currentValue, index, arr), thisValue)
/*it will check each item of an array against some kind of condition is true or false if its true it will
put item back in the array and if its false it will not going to put item in the array.
.filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the 
elements that return truthy for the criteria.*/

const arr3 =[1,2,3];
let even = arr3.filter(function(element){
    if((element % 2) == 0){
        return element
    }
});
console.log(even);