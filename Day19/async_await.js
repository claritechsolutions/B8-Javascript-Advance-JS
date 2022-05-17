async function hello(){
    try{
    const response= await fetch('async.json');
    const student = await response.json();
    console.log(student);
    }
    catch(error){
        console.log("Catch Error -->", error);
    }
}
hello().then((response)=>{
    console.log(response)
})

