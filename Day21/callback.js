function greet(name,callback){
    console.log(`Hii ${name}`)
    callback()

}
function any(){
    console.log("I m call back function")
}
greet('pratiksha',any)

function test(name,myfunction){
    console.log("Hello World")
    myfunction(name)
}
function test2(name){
    console.log(`Heloo ${name}`)
}
test('Pratiksha',test2)