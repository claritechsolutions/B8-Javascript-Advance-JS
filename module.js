  let test = "class test";


  function hello(name){
    console.log(`Hello ${name}`);
}
class user{
    constructor(){
        console.log("module method");
    }
}
export { test,hello,user};

//  By using default
export default function (){
    console.log("hello");
}

