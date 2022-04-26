const fruits=["Mango","Banana","Grips","Apple"]

document.getElementById("heading").innerHTML=("Remove a single Item by a Index")
/**
 * Remove a single item by its index
 */
const start=fruits.indexOf("Banana");
const deleteCount=2;
fruits.splice(start,deleteCount);
document.getElementById("demo").innerHTML=("fruits -->", fruits);

/**
 * Multiple add at specified index
 */
 document.getElementById("heading1").innerHTML=(" Multiple add at specified index")

 fruits.splice(2,0,"meggi")
 document.getElementById("demo1").innerHTML=("fruits -->", fruits);

 /**
 * Replace Multiple items in array
 */
  document.getElementById("heading2").innerHTML=(" Replace Multiple items in array")
const run =-2;
const deleted=2;
const removeItem=fruits.splice(run,deleted,"milk", "soya");
document.getElementById("demo2").innerHTML=("fruits-->",fruits);
