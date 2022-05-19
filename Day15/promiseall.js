let cust = function (returnData,message){
    return function(resolve,reject){
        setTimeout(()=>{
        console.log(` ${message}`)
        resolve (returnData)
    }, returnData*100)

    }
}
let p1=new Promise(cust(10,"pratiksha"));
let p2=new Promise(cust(20,"claritech"));
let p3 =new Promise((resolve,reject)=>{
    reject("The third promise is rejected")
})
Promise.all([p1,p2,p3])
.then(
    (result)=>{
        console.log("Result-->",result)
    }

)
.catch(
    (error)=>{
        console.log("Result-->",error)
        
    }
)
