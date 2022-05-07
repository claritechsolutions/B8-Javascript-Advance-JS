/*****some****
syntax : array.some(function(value, index, arr), this)
The some() method checks if any array elements pass a test (provided as a function).
[if only one item in array is satisfying the condition then result will bw true]
The some() method executes the function once for each array element:
1.If the function returns true, some() returns true and stops.
2.If the function returns false, some() returns false and stops.*/

//using function

const ages = [3, 10, 18, 20];
const result = ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
console.log(result);


const number = [2,3,4,-1,5];
const checkneg = number.some(function(item){
    return item<0;
});
console.log(checkneg);