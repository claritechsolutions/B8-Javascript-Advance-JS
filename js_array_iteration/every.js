/*****Every****
syntax : array.every(function(currentValue, index, arr), thisValue).
The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.
The every() method returns false if the function returns false for one element.
[it will return true only if all items in array are passing the given condition.
if any one item is not satisfying/matching the condition then it will give false output]*/

const ages = [3, 10, 18, 20];
const result = ages.every(checkAdult);
function checkAdult(age) {
  return age > 18;
}
console.log(result);


const number = [2,3,4,-1,5];
const checkneg = number.every(function(item){
    return item<0;
});
console.log(checkneg);

