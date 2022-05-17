let prom = (data1,data2)=>{
    return(resolve,reject)=>{
        console.log(data2)
        resolve(data2)
    }
}
let p1 = new Promise(prom(10,'sanu'));
let p2 = new Promise(prom(20,'sanu'));
let p3 = new Promise(prom(30,'sanu'));

Promise.all([p1,p2,p3]).then((result)=>{
    console.log('result')
}).catch((error)=>{console.log('error')})