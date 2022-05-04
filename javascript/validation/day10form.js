function errorMsg(eid, errmsg) {
    document.getElementById(eid).innerHTML = errmsg;

}

function validateForm() {
    // alert();
    var name = document.getElementById("name").value;

    var ph = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var conpass = document.getElementById("Cpassword").value;

    if (name == "") {
        errorMsg("fnameErr", "*please enter your name");
    } else if (!isNaN(name)) {
        errorMsg("fnameErr", "*please enter only character");
    } else if (name.length <= 3 || name.length > 30) {
        errorMsg("fnameErr", "*name should contains 5 to 30 character");
    }

    if (ph == "") {
        errorMsg("phErr", "*please enter your phone number");
    } else if (ph.length != 10) {
        errorMsg("phErr", "*phone number should be 10 digits");
    }



    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == "") {
        errorMsg("emailErr", "*please enter your email");

    } else if (email.match(mailformat)) {
        // alert("Valid email address!");
        // errorMsg("emailErr", "*email is valid");
        errorMsg("emailErr", "*please enter valid email");
        return true;
    }
    // return true;
    // } else {
    //     // alert("You have entered an invalid email address!");
    //     errorMsg("emailErr", "*please enter valid email");
    //     return false;
    // }
    if (password == "") {
        errorMsg("passErr", "*please enter your password");
    } else if (password.length <= 6 || password >= 10) {
        errorMsg("passErr", "*password should be 6 to 10 digit long");
    }

    if (password != conpass) {
        errorMsg("passErr", "*password do not match plz reenter");
        // return false;
    }
    return false;
}

// var passw = /^[A-Za-z]\w{7,14}$/;
// if (password == "") {
//     errorMsg("passErr", "*please enter your password");

// } else if (password.match(passw)) {
//     errorMsg("passErr", "valid");
//     // return true;
// } else {
//     errorMsg("passErr", "*please enter correct password");
//     // return false;
// }
// if (conpass == "") {
//     errorMsg("cpassErr", "*please enter password");