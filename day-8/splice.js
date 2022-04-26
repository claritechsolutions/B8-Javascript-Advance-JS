const arraylist = ["ubuntu linux", "kali linux", "majaro linux", "mint linux", "arch linux"]


/*=========  Remove a single item by its index  ============*/
// let start = arraylist.indexOf("kali linux")
// let end = 2;
// arraylist.splice(start,end)
// console.log(arraylist)


/*============   Multiple add at specified index  ============ */
// let start = arraylist.splice(1,0,"garuda linux")
// console.log(arraylist)


/*============   Replace Multiple items in array   ============== */
// const start = 2;
// const deleteCount = 2;
// const removeItems = arraylist.splice(start, deleteCount, "NodeJS Developer", "Mern Developer");
// console.log("removeItems -->", removeItems);
// console.log("replace item in arraylist -->", arraylist);



/* =========================================

            * Iterate Array
            * - for .. of loop
            * - every()
            * - filter()
            * - map()
            * - reduce()
            * - forEach()
            
  =========================================== */

for (let index = 0; index < 3; index++) {
  const element = arraylist[index];
  console.log("element -->", element);
}
console.log("#################################################################")
arraylist.forEach((element, index) => {
  if (index < 3) {
    console.log("index -->", index, "--> developerRole -->", element);
  }
})
console.log("#################################################################")
for (const developer of arraylist) {
  console.log("developer -->", developer);
}




/*
 * Merge multiple array together - CONCAT
 */

const arratlist2 = ["Node Developer", "Full Stack Developer"];
const combined = arraylist.concat(arratlist2);
console.log("----------------------------------------------------------------")
console.log("arraylist old -->", arraylist);
console.log("new arraylist2 -->", arratlist2);
console.log("combined arraylist & arraylist2 -->", combined);
console.log("----------------------------------------------------------------")
