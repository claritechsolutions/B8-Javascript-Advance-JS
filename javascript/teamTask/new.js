for (let i = 0; i < 2; i++) {
    for (let j = i; j < 4; j++) {
        console.log(j);
    }
}

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(student);
delete student.rollno;
console.log(student);