const arraylist = ["windows xp", "windows 7", "windows 8.1", "windows 10"];

/*============ remove last index item ================*/

// arraylist.pop();
// console.log(arraylist)



/*=========== remove first index item ===============*/
// arraylist.shift()
// console.log(arraylist)


/*===== Remove multiple items from the end of an array - SPLICE ======= */
//console.log(arraylist.slice(1))    
// console.log(arraylist.slice(-3)) 


const startElement = 3;
const deleteCount = 2;
console.log("display element between (start,end) -->", arraylist.splice(startElement, deleteCount))

