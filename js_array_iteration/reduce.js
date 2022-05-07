/****Reduce*****
syntax : array.reduce(function(total, currentValue, currentIndex, arr), initialValue)*/
const arr5 = [4,8,5,2];
const red = arr5.reduce(myFunction);
function myFunction(a,b) {
  return a+b;
}
console.log(red);

/*explaination of reduce function
first check syntax for every function
here we have total so 1st total is not there so total = a(first_number) and currentvalue = b(second_number)
so 1st case : total = 4 and currentvalue = 8(4+8=12);
now total means a =12 and currentvalue means b =5(12+5=17)
now total is 17 means a =17 abd b = 2(17+2=19) result is 19*/

const sum = [1,2,3].reduce(function(result,item){
  return result+item;
} ); //put 0 or not same result
console.log(sum);

