// let prom = new Promise(function(resolve, reject) {
//     if (condition) {
//         resolve();
//     } else {
//         reject();
//     }
// })

function prom(number) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("hey i m in pending state");
            if (number % 2 == 0) {
                resolve("The number is even");
            } else {
                reject("THe number is odd");
            }
        }, 1000);
    })
}
prom(112).then((result) => {
    console.log("Result==>", result);
}).catch((error) => {
    console.log("Error==>", error);
})