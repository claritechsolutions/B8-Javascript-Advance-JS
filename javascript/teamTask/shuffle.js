var myArray = [9, 7, 5, 6, 1, 2, 4, 3, 8];

var j;
var temp = [];
document.write("original array", myArray);
for (var i = 0; i <= myArray.length - 1; i++) {
    j = Math.floor(Math.random() * (i + 1));
    // console.log("J-->", j);
    temp = myArray[i]; //1   
    // console.log("temp-->", temp);
    myArray[i] = myArray[j];
    // console.log("myarray[i]-->", myArray[i]);
    myArray[j] = temp;
    // console.log("myArray[j]", myArray[j])
    document.write("<br/>random array", myArray, "<br/>");
}
// document.write(myArray);