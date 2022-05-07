// function prom(complete){return new Promise(function(resolve,reject){
//     console.log("Fetching data, please wait");
//     setTimeout(()=>{if(complete){
//         resolve("Task is successfull");
//     }
//     else{
//         reject("Task is failed");
//     }},2000)
// });
// }
// let onfulfil=(result)=>{console.log(result)};
// let onfail=(error)=>{console.log(error)};
// prom(true).then(onfulfil).catch(onfail);

function prom(a,b){return new Promise(function(resolve,reject){
    console.log("Fetching data, please wait");
    let c=a%b;
    setTimeout(()=>{if(c==0){
        resolve(`${a} is divisible by ${b} `);
    }
    else{
        reject(`${a} is not divisible by ${b} `);
    }},2000)
});
}

// let onfulfil=(result)=>{console.log(result)};
// let onfail=(error)=>{console.log(error)};
// prom(true).then(onfulfil).catch(onfail);

prom(8,2).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});
