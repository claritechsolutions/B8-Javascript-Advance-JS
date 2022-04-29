const languages = ["Assamese", "Bengali", "Dogri|", "Gujarati", "Hindi", "Kashmiri", "Konkani"];

//** foreach()

languages.forEach((ele) => {
    if (ele === "Bengali") {
        console.log("Bengali");
    }
    else {

    }
});

/**     enery()   */

const belowLimit = (allvalues) => allvalues.num > 10;
let values = [20, 30, 40, 50];
console.log(values.every(belowLimit));

if (values.every(belowLimit)) {
    console.log("all numbers are greater than 10");
}
else {
    console.log("some numbers are below the limit");
}



/*    filter   */
 const langCheck= languages.filter((items,index)=> {if (items.includes("o")){
     console.log("languages with letter 'o'=>",items);
     return items;
 }})
 console.log("Filtered languages=", langCheck);


 /*      Destroying Array      */

let array = {
  data: [
    {
      name: "Ankit",
      age: ""
    },
    {
      name: "Gorakh",
      age: ""
    },
    {
      name: "React Devs",
      age: ""
    }
  ],
  page: "1",
  totalCount: '100',
  allUserData: "50000",
  abcd: "50000",
  def: "50000",
};
let { data, page, totalCount, abcd } = array;

console.log("data ==>", data);
console.log("abcd ==>", abcd);
// console.log("totalCount ==>", def);