// function formError(){
//     var fErr=document.myform.fErr.value;
//     document.getElementById(fErr).innerHTML = "enter valid name";
// }

function validateform() {
    // alert();
    var name = document.getElementById("name").value; //value from user
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var password1=document.getElementById("password1").value;
    var password2=document.getElementById("password2").value;
    if (name == "") {

        // alert("name cannot be blank");
         document.getElementById("fname").innerHTML="*name cannot be blank" //innerHTML element
        //  return false;
    }
    else if(!isNaN(name)){
        // alert('enter valid name')
        document.getElementById("fname").innerHTML="please enter valid name"
       }else{
        document.getElementById("fname").innerHTML="accepted"
    }

    if(email==""){
        document.getElementById("Ename").innerHTML="*email cannot be blank"

    }
    else{
        document.getElementById("Ename").innerHTML="accepted"
    }


    if(phone==""){
        document.getElementById("Pname").innerHTML="*number cannot be blank"    
    }
    else if(phone.length!=10){
        document.getElementById("Pname").innerHTML="please enter valid number"    
    }
    else{
        document.getElementById("Pname").innerHTML="accepted"
    }

    if(password1==""){
        document.getElementById("word1").innerHTML="*password must be set"    
    }
    else if(password1.length<=5 || password1.length>=10){
        document.getElementById("word1").innerHTML="length between 6 to 9"    
    }
    else{
        document.getElementById("word1").innerHTML="accepted"
    }

    if(password2==""){
        document.getElementById("word2").innerHTML="*password must be set" 
    }
    else if(password2 != password1){
        document.getElementById("word2").innerHTML="password must be same"

    }
    else{
        document.getElementById("word2").innerHTML="accepted"
    }


}
