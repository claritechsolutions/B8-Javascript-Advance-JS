var ages = [45, 71, 66, 15, 25, 12];

// find() method return the value of the "first element" in Array that satisfies the condition.
let findAge = ages.find((age) => {
    return age >= 18;

});
document.write(`Result of the find method is => ${findAge} <hr>`);

// findIndex () method return the index of the "first element" in Array that satisfies the condition.

let findIndex = ages.findIndex((age) => {
    return age >= 18;
});

document.write(`Result of the find method is => ${findIndex} <hr>`);

//filter() method creates an array filled with all array elements that satisfies the condition.

let filterAge = ages.filter((age) => age >= 18);
document.write(`Result of the find method is => ${filterAge} <hr>`);

// forEach()

var list1=["Archana","Sahil","Siddhesh","Mitali"];

list1.forEach((names,index)=>{
    document.write(`Index:- ${index} `);
    document.write(`Name:- ${names} <br>`);
})

//////////// Nested forEach
var names = [
    {
      fName: "Ankit",
      lName: "Varia",
      designations: ["Sr. Software Developer", "Manager", "CEO"]
    },
    {
      fName: "Gorakh",
      lName: "Kharat",
      designations: ["Super Sr. Software Developer", "Super Sr. Manager", "Supeer Sr. CEO"]
    },
    {
      fName: "Javascript",
      lName: "React",
      designations: ["Extra Super. Software Developer", "Extra Super Manager", "Extra Super CEO"]
    }
  ];
  names.forEach((name, index) => {
    document.write(`<br>index ==> ${index}<br>`)
    document.write(`name ==> ${name.fName}<br>`)
    document.write(`Hey your name is ${name.fName} ${name.lName} & your designations are ${name.designations}`)
  
    
      name.designations.forEach((designation, subindex) => {
        console.log("Subindex", subindex);
        console.log("Designation", designation)
      })
    
    })
////// MAP()

document.write(`<hr>Map () Method`);
names.map((name, index) => {


    document.write(`<br>index ==> ${index}<br>`)
    document.write(`name ==> ${name.fName}<br>`)
    document.write(`Hey your name is ${name.fName} ${name.lName} & your designations are ${name.designations}`)
  
  
    name.designations.map((designation, childindex) => {
      console.log("childindex", childindex);
      console.log("designation", designation)
    })
  
  })
  console.log('"MAP END"')

