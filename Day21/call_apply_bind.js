let name1 = {
    firstName: "Pratiksha",
    lastName: "Nalawade"
  }
  
  let printFullName = function (hometown, state) {
    console.log(`${this.firstName} ${this.lastName} belongs from ${hometown} & state is ${state}`)
  }
  
  // Call & Apply method
  printFullName.call(name1, "Pune", "Maharashtra");
  printFullName.apply(name1, ["Pune", "Maharashtra"])
  let name2 = {
    firstName: "abcd",
    lastName: "wxyz"
  }
  
  // Bind Method
  let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra")
  printMyName(); 
  console.log(printMyName)