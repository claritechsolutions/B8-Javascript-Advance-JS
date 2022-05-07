var subjectArray = ["JAVASCRIPT","JSON","ABAP","PHP"];
console.log(typeof subjectArray) // it will print object.

var numArray = [10,20,30,40];
console.log(typeof numArray); // it will also print object.

console.log(subjectArray); //it will print all array.

console.log(subjectArray.length); //it will print lenght of array.

var myArr = subjectArray; // it will print result with assigning variable.
console.log(myArr); 
console.log(myArr.length);

//difference between for and for each loop with same result.
//traditional for loop
for (let i = 0; i < subjectArray.length; i++) {
        console.log([i] + " : " + subjectArray[i]); 
}

//forEach loop
subjectArray.forEach(result);
function result(item,index)
{
    console.log(index +" : "+item);
}
