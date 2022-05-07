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
        return false;
    } else if (!isNaN(name)) {
        errorMsg("fnameErr", "*please enter only character");
        return false;

    } else if (name.length <= 3 || name.length > 30) {
        errorMsg("fnameErr", "*name should contains 5 to 30 character");
        return false;
    }

    if (ph == "") {
        errorMsg("phErr", "*please enter your phone number");
        return false;

    } else if (ph.length != 10) {
        errorMsg("phErr", "*phone number should be 10 digits");
        return false;
    }
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == "") {
        errorMsg("emailErr", "*please enter your email");
        return false;

    } else if (email.match(mailformat)) {
        alert("Valid email address!");
        errorMsg("emailErr", "*email is valid");
        errorMsg("emailErr", "*please enter valid email");
        return false;
    }
    if (password == "") {
        errorMsg("passErr", "*please enter your password");
        return false;
    } else if (password.length <= 6 || password >= 10) {
        errorMsg("passErr", "*password should be 6 to 10 digit long");
        return false;
    }
    if (conpass == "") {
        errorMsg("cpassErr", "*please reenter password");
        return false;
    } else if (password != conpass) {
        errorMsg("cpassErr", "*password do not match plz reenter");
        return false;
    }

    return (true);
}