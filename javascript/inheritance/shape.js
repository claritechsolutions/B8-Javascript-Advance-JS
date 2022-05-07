class shape {
    constructor() {
        console.log("this is shape class constructor");
    }
    area() {

    }
    perimeter() {

    }
}

class circle extends shape {
    constructor(r) {
        super();
        console.log("this is circle class constructor");
        this.radius = r;
    }

    area() {
        let circleArea = Math.PI * this.radius * this.radius;
        document.write(`<h3>Circle</h3>Area==> ${circleArea}`);
    }
    perimeter() {
        let circlePerimeter = 2 * Math.PI * this.radius;
        document.write(`<br/>Perimeter==> ${circlePerimeter}`);
    }
}

class rectangle extends shape {
    constructor(w, h) {
        super();
        console.log("this is rectangle class constructor");
        this.width = w;
        this.height = h;
    }
    area() {
        let rectangleArea = this.width * this.height;
        document.write(`<h3>Rectangle</h3>Area==>${rectangleArea}`)
    }
    perimeter() {
        let rectanglePerimeter = 2 * (this.width + this.height);
        document.write(`<br/>Perimeter==>${rectanglePerimeter}`);
    }

}
class square extends shape {
    constructor(s1) {
        super();
        console.log("this is square class constructor");
        this.side1 = s1;
    }
    area() {
        let squareArea = 4 * this.side1;
        document.write(`<h3>Square</h3>Area==> ${squareArea}`);
    }
    perimeter() {
        let squarePerimeter = this.side1 * this.side1;
        document.write(`<br/>Perimeter==> ${squarePerimeter}`);
    }
}
let circleObj = new circle(10);
circleObj.area();
circleObj.perimeter();
let rectobj = new rectangle(20, 30);
rectobj.area();
rectobj.perimeter();
let squareObj = new square(15);
squareObj.area();
squareObj.perimeter();