function sum(){
    let z;
    let a = 2;
    let b =3;
    z = a  + b;
    console.log(z);
}
setTimeout(sum,2000)
console.log("i am set time out")

// function prom(complete) {
//       return new Promise(function (resolve, reject) {
    
//         setTimeout(function () {
//           console.log("hey I'm in Pending State");
    
//           if (!complete) {
//             resolve("I am successful");
//           } else {
//             reject("I am failed");
//           }
//         }, 5000);
    
//       })
//     }
//     prom(true).then(
//       (result) => {
//         console.log("RESULT -->", result);
//       }
//     ).catch(
//       (error) => {
//         console.log("ERROR -->", error);
//       }
//     )
//     console.log("A");
    