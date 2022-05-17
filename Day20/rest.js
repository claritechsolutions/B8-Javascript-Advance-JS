
/**Rest Operator */
/**Example 1 */
function test(...input){
    let sum=0
    for (let i of input){
        sum+=i
    }
    return sum           
}
console.log(test(1,2));
console.log(test(1,2,3))
console.log(test(1,2,3,4,5))
/**Example 2 */
function test2(name,course,...per){
    console.log(`MY name is${name} and Im studying${course}`)
    //console.log(course)
    //console.log(per)
    let total=0
    for(let index in per){
        total+=per[index]
    }
    console.log( total)
}
test2("Pratiksha","Computer Engg",40,40)
/**Example3 */

test3=(a,b,...c)=>{
    console.log(`${a},${b}`)
    console.log(c)
    console.log(c[0])
    console.log(c.length)
    console.log(c.indexOf('lione'))
    
}
test3('Mukul','Latiyan','Lione','Messi','Barcelona')