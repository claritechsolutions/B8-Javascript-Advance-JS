const fun1=()=>{
    setTimeout(()=>{
        console.log("Welcome to first function");
        fun2()
    },2000);
}

const fun2=()=>{
    console.log("Welcome to second function");
}

fun1();

///////////////////////////////

const person1=(name1,call1)=>{
    console.log(`Name is: ${name1}`);
    call1("First friend");
}

const person2 = (data2, call2) => {
    console.log(`personTwo ==> ${data2}`)
  }
  
  person1("Ankit", person2);