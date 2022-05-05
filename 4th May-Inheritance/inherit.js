class employee {
    constructor(name, designation, age) {
        this.empName = name;
        this.empDesi = designation;
        this.empAge = age;
        console.log("Employee Information");
    }
    empInfo() {
        document.write(`<h2>Employee Details:</h3>
          <br>Employee Name: ${this.empName}
          <br>Employee Designation: ${this.empDesi}
          <br>Age:${this.empAge}`);

    }
}
// let a = new employee("Avinash", "Developer", 50, 000);
// a.empInfo();

class salaryDetails extends employee {
    constructor(name, designation, age, salary, pf) {
        super(name, designation, age);
        this.empSal = salary;
        this.empPf = pf;
    }
    salInfo() {
        document.write(`<h2>Employee  Salary Details:</h3>
          <br>Employee Name: ${this.empName}
          <br>Employee Designation: ${this.empDesi}
          <br>Age:${this.empAge}
          <br>Salary:${this.empSal}
          <br>Provident Fund:${this.empPf}`);

    }
}
let a = new salaryDetails("Avinash", "Developer",30, 50000,5000);
a.empInfo();
a.salInfo();