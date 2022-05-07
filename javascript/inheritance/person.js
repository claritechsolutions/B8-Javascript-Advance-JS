class engineer {
    constructor(uname, age, city, salary) {
        this.Pname = uname;
        this.Page = age;
        this.Pcity = city;
        this.salary = salary;
    }
    getInfo() {
        document.write(`<h3>Pesron class Information</h3>
        <b>Name:</b> ${this.Pname}<br/>
        <b>Age :</b> ${this.Page}<br/>
        <b>City:</b> ${this.Pcity}<br/>
        <b>Salary:</b> ${this.salary}`);
    }
}

class SoftwareDevloper extends engineer {
    constructor(uname, age, city, salary, company, extra) {
        super(uname, age, city, salary);
        this.company = company;
        this.extraSalary = extra;
    }
    getInfo() {

        let newSalary = this.salary + this.extraSalary;
        document.write(`<h3>Pesron class Information</h3>
        <b>Name:</b> ${this.Pname}<br/>
        <b>Age :</b> ${this.Page}<br/>
        <b>City:</b> ${this.Pcity}<br/>
        <b>Company:</b> ${this.company}<br/>
        <b>Salary:</b> ${newSalary}`);
    }
}

// let p1 = new person("Dhanashri", 25, "belgaum");
// p1.getInfo();
let se = new SoftwareDevloper("dhanashri", 25, "belgaum", 20000, "infosys", 30000);
se.getInfo();