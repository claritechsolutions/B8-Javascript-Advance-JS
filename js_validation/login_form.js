function errorMsg(elID, errorMsg){
    document.getElementById(elID).innerHTML = errorMsg;
}

function validate() {
    //var name = document.myForm.fname.value;// we also can create variable for document.myForm.fname.value
    if (document.myForm.fname.value == "") {
        //alert("Please provide your name!");
        document.getElementById("fnameError").innerHTML = "Please Enter valid first name";
        //errorMsg("formError","Please Enter Valid Name of user");
        //document.myForm.fname.focus();
        return false;}

    if (document.myForm.lname.value == "") {
        document.getElementById("lnameError").innerHTML = "Please Enter valid last name";
        return false;
    }

    if (document.myForm.date.value == "") {
        document.getElementById("dateError").innerHTML = "Please Enter valid date";
        return false;
    }
    if (document.myForm.email.value == "") {
        document.getElementById("emailError").innerHTML = "Please Enter valid email address";
        return false;
    }
    if (document.myForm.phone.value == "") {
        document.getElementById("numberError").innerHTML = "Please Enter valid phone number";
        return false;
    }
    return (true);

}


function checkPhonenumber() {
    //var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //Where str could be any of these formats: 555-555-5555 (555)555-5555 (555) 555-5555 555 555 5555 5555555555 1 555 555 5555.
    var phoneno = document.getElementById("phoneNumber").value;
    var string = /^[6-9]\d{9}$/;
    if(string.test(phoneno)){
    alert("Entered phone number is valid"); return true;}
    else{
    alert("you have entered invalid phone number"); return false;}
}

function checkRadio() {
    if (document.querySelector('input[name="inlineRadioOptions"]:checked')) {
        return (true);
    }
    else {
        alert("select one gender")
        return false;
    }
}

// var emailString = document.getElementById("email").value;
// function ValidateEmailAddress() {
//     // check for @ sign
//     var atSymbol = emailString.indexOf("@");
//     if(atSymbol < 1) return false;
    
//     var dot = emailString.indexOf(".");
//     if(dot <= atSymbol + 2) return false;
    
//     // check that the dot is not at the end
//     if (dot === emailString.length - 1) return false;
    
//     return true;
// }
// function CheckEmail()
// {
//    //get result as true/false
//    var Result= ValidateEmailAddress(emailString);
	
// 	 if(Result)
// 	 {
// 	     alert("ok");
//          return true;
//    }
// 	 else
// 	 {
// 		alert("not ok");
//         return false;
// 	 }
// }

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("your email address is valid...");
        // document.form1.text1.focus();
        return true;
    } else {
       // alert("You have entered an invalid email address!");
        document.getElementById("emailError").innerHTML = "Please Enter valid email...";

        // document.form1.text1.focus();
        return false;
    }
}

function resetForm() {
    var elems = document.querySelectorAll(".formError");
    elems.forEach(itm => {
      document.getElementById(itm.id).innerHTML = ''
    })
  }
  
