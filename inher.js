class car {
    constructor(name,prise,colour){
        this.carname = name;
        this.carprise = prise;
        this.carcolour= colour;
    }

    info(){
        document.write(`<h1>About my car</h1>
                         My car is ${this.carname} <br>
                         and it's colour is ${this.carcolour}<br>
                          and prise is ${this.carprise}`)
    }
    
}
class bike extends car{
    info(){
        document.write(`<h1>About my bike</h1>
                         My bike is ${this.carname} <br>
                         and it's colour is ${this.carcolour}<br>
                          and prise is ${this.carprise}`)
    }

}
let a = new car ("venue",110000,"white");
let b = new bike ("Activa",50000,"Black")
a.info();
b.info();