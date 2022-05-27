// function errorMsg(elID, errorMsg){
//     document.getElementById(elID).innerHTML = errorMsg;
// }

// function validate() {
//     //var name = document.myForm.fname.value;// we also can create variable for document.myForm.fname.value
//     if (document.myForm.fname.value == "") {
//         //alert("Please provide your name!");
//         document.getElementById("fnameError").innerHTML = "Please Enter valid first name";
//         //errorMsg("formError","Please Enter Valid Name of user");
//         //document.myForm.fname.focus();
//         return false;}
//     else{
//         document.getElementById("fnameError").innerHTML = "fname accepted";
//         document.getElementById("fnameError").style.color = "green"
//         }

//     if (document.myForm.lname.value == "") {
//         document.getElementById("lnameError").innerHTML = "Please Enter valid last name";
//         return false;
//     }
//     else{
//         document.getElementById("lnameError").innerHTML = "lname accepted";
//         document.getElementById("lnameError").style.color = "green"
//         }

//     if (document.myForm.date.value == "") {
//         document.getElementById("dateError").innerHTML = "Please Enter valid date";
//         return false;
//     }
  

//     if (document.myForm.email.value == "") {
//         document.getElementById("emailError").innerHTML = "Please Enter valid email address";
//         return false;
//     }
//     else{
//         document.getElementById("emailError").innerHTML = "Email id accepted";
//         document.getElementById("emailError").style.color = "green"
//         }
//     if (document.myForm.phone.value == "") {
//         document.getElementById("numberError").innerHTML = "Please Enter valid phone number";
//         return false;
//     }
//     else{
//         document.getElementById("numberError").innerHTML = "phone number accepted";
//         document.getElementById("numberError").style.color = "green"
//         }
//     return (true);

// }


// function checkPhonenumber() {
//     //var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//     //Where str could be any of these formats: 555-555-5555 (555)555-5555 (555) 555-5555 555 555 5555 5555555555 1 555 555 5555.
//     var phoneno = document.getElementById("phoneNumber").value;
//     var string = /^[6-9]\d{9}$/;
//     if(string.test(phoneno)){
//     alert("Entered phone number is valid"); return true;}
//     else{
//     alert("you have entered invalid phone number"); return false;}
// }

// function checkRadio() {
//     if (document.querySelector('input[name="inlineRadioOptions"]:checked')) {
//         return (true);
//     }
//     else {
//         alert("select one gender")
//         return false;
//     }
// }

var emailString = document.querySelector("#email").value;
function ValidateEmailAddress(email) {
    //check for @ sign
    var atSymbol = email.indexOf("@");
    var dot = email.indexOf(".");
    if(atSymbol <= 1) return false;
    else if(dot <= atSymbol + 2) return false;
    //check that the dot is not at the end
    if(dot === (email.length - 1)) 
    {return false;}
    else return true;
}
/*how to connect one function to another with varibles/parameters
either create a global varibale or pass value in onsubmit or click fenction by document.getElementByID("email").value
when it will check for check email function it will get emailString as a variable and we already pass value in onsubmit
it will come to result and go to validateEmailAddress function and put taht same value in email variable and perform 
all checks and if result is true go to if block and if result is false go to else block.*/

function CheckEmail(emailString)
{
   //get result as true/false
   //var Result = true;
   var Result = ValidateEmailAddress(emailString);
	
	 if(Result == true)
	 {
	     alert("ok");
         return true;
   }
	 else
	 {
		alert("not ok");
        return false;
	 }
}

// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         alert("your email address is valid...");
//         // document.form1.text1.focus();
//         return true;
//     } else {
//        // alert("You have entered an invalid email address!");
//         document.getElementById("emailError").innerHTML = "Please Enter valid email...";

//         // document.form1.text1.focus();
//         return false;
//     }
// }

// function resetForm() {
//     var elems = document.querySelectorAll(".formError");
//     elems.forEach(itm => {
//       document.getElementById(itm.id).innerHTML = ''
//     })
//   }
  
