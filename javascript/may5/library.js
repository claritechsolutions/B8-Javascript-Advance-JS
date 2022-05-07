 let name = "dhanashri";
 class person {
     constructor(name, age, salary) {
         this.name = name;
         this.age = age;
         this.salary = salary;
     }
     getinfo() {
         console.log(`Name: ${this.name} Age:${this.age} Salary:${this.salary}`);
     }
 }

 function Addition(a, b) {
     let add = a + b;
     console.log(`Addition is: ${add}`);
 }

 function Substraction(c, d) {
     let sub = c - d;
     console.log(`Substraction is: ${sub}`);
 }
 export { name, person, Addition, Substraction };