let self =true;
let selfday = new Promise((resolve,reject)=>{
    if(self){
       resolve ("It was Free Day")

    }else{
        reject ("It was busy day")

    }

})
console.log("SelfDay-->",selfday)
//promise with .then
let value =new Promise(function(resolve,reject){
    resolve("Promise resolved")

});
// executes when promise is resolved successfully
  
value
.then(function valuePass(result){
    console.log(result)
})
.then(function ValuePass1() {
    console.log("You can call multiple functions this way.");
  });
//promise with .catch()
// let Value =new Promise(function(resolve,reject){
//     reject ("Promise is rejected")

// })

// Value
// .then(
//     function successValue(result) {
//         console.log(result);
//     },
//  )
//  .catch(
//     function errorValue(result) {
//         console.log(result);
//     }
// );
  /**Example No.1 */
  function test(text){
   return new Promise(function(resolve,reject){

    setTimeout (function(){

        console.log("Okay Let me think")
          if(text){
              resolve("Heyy,I m going to trip")
          }else
          {
              reject("I'm not going to trip")
          }
        } ,1000);
        

      })
  }
  test(false).then(
      function(result){
          console.log("Result-->",result)
      }
  )
  .catch(
     (error)=>{
         console.log("Error-->",error)

     }
  )
  /**Example no.2 */
  function evenOdd (number){
      return new Promise(function(resolve,reject){
          if(number %2==0){
              console.log("The number is even")
          }else
          {
              console.log("The number is odd")
          }

      })
  }
  evenOdd(69).then(
      function(result){
          console.log("Result-->",result)
          
      }
  )
  .catch(
      function(error){
        console.log("Error-->",error)
      }
  )