//example with super and extends keyword
class shape {
    constructor(color){
    this.color = color;
    console.log("hi i am 1st constructor"); 
    }
    getcolor(){
        console.log(`available color is ${this.color}`);
    }
}

class square extends shape{
    constructor(color,width,height){
    super(color);
    this.width = width;
    this.height =height;
    }

    getArea(){
        let area = this.width*this.height;
        console.log(`Area of rectangle is ${area} and color of rectangle is ${this.color}.`);
    }
} 
let a = new square('red',4,5);
a.getArea();
a.getcolor();

//simple example
class me{
    constructor(){
        console.log("check");
    }
    greet(){
        console.log("bye");
    }
}


let b = new me();//constructor can be call only by creating object
b.greet();//and to call the prototype you neeed to call it.

