function test(){
    let name="Pratiksha"
    {
        function test2() {
            console.log(`Hii ${name}`)
            
        }
        return test2;
    }
} 
const t1 =test();
// console.log(t1)
console.log(t1());
/**Example 2 */
 function num(x){
     function num2(y){
         return x*y;
     }
     return num2;
 }
 const multi=num(3)
 const multiply =num(4)

 
console.log(multi(6)); 
console.log(multiply(2));

