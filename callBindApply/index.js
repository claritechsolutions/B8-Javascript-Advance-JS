let name1 = {
    firstName: "Amisha",
    secondName: "Patel"
}
let fullDetails = function (state, country){
    console.log(`Full Name: ${this.firstName} ${this.secondName} from State: ${state} and Country: ${country}`);
}

// Call and Apply method:  //
fullDetails.call(name1, "Maharashtra", "India");
fullDetails.apply(name1, ["Panjab", "India"]);

let name2 = {
    firstName: "Priti",
    secondName: "Pujari"
}

//   Bind Method: //

let printmyDetails = fullDetails.bind(name2, "Tokyo", "Japan");
printmyDetails();