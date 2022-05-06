class employee{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
        
    }
    printData(){
        document.write(`<h3>Employee Class</h3>
        Name: ${this.name} <br>
        Age: ${this.age}<br>
        salary:${this.salary}`);
    }
}
class manager extends employee {
    constructor(name,age,salary,pa,ta){
        super(name,age,salary);
        this.petrolAllowance=pa;
        this.telephoneAllowance=ta;

    }
    printInfo(){
        let totalSalary= this.salary +this.petrolAllowance + this.telephoneAllowance 
        document.write(`<h3>Manager Class </h3>
        Name: ${this.name} </br>
        Age: ${this.age} </br>
        Salary: ${totalSalary} </br>`
    );
    }

}


let a=new manager("Pratiksha",21,30000,1000,300);

a.printData();
a.printInfo();

