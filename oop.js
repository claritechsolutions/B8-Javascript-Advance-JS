/*
class class_name {
    constructor() {  //this is constructor method
        console.log("this is constructor type mrthod");

    }
    msg() {  //this is prototype method
        console.log("This is prototype method")
    }
    static msg1() {  //this is static method
        console.log("This is static type method")
    }
}

let a = new class_name()
a.msg()
class_name.msg1()
*/


/*
class class_name {
    constructor(name,dev) {
        this.name1 = name;
        this.dev = dev;
       
        console.log(`my name is = ${name}`);

    }  
    msg(){
        console.log("---------------------")
        console.log(`value copy using this. = ${this.name1}`);
        console.log(`working on ${this.dev}`);
    }
    static msg1(stc){
        console.log("---------------------")
        console.log(`${stc}`)
    }
}
let a = new class_name("A1","React-js")
let b = new class_name("B1","full-stack")
let c = new class_name("C1","node.js")
a.msg()
b.msg()
c.msg()
class_name.msg1("this is static method")
*/


/*
class class_name{
    constructor(a,b){
        this.a =a;
        this.b = b;
        console.log(`${a} X ${b} = ${a*b}`)
    }
    msg(){
        console.log(`${this.a} + ${this.b} = ${this.a+this.b}`)

    }
}
let a = new class_name(12,12)
a.msg()
*/


/*
class class_name{
    constructor(a,b){
        console.log(`${a} + ${b} = ${a+b}`)
       
    }
    msg(a,b){
       
        console.log(`${a} X ${b} = ${a*b}`)
    }
}
let a = new class_name(4,12)
a.msg(10,10)

*/

class class_name{
    constructor(a,b){
        this.a =a;
        this.b = b;
        console.log(`${a} X ${b} = ${a*b}`)
       
    }
    msg(){
        console.log(`${this.a} + ${this.b} = ${this.a+this.b}`)

    }
    static msg1(){
        console.log(`this is 1st class`)
    }
   
}

class inherit_class extends class_name{
    
    
    msg(){
        console.log("----------------")
        super.msg()
        console.log("if u want access both method then use super.methode_name")
    }
    static msg1(){
        super.msg1()
        console.log("this is 2nd class (inherit)")
    }

}
let a = new inherit_class(12,12)
a.msg()
inherit_class.msg1()