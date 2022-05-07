function validation() {
    var username = document.getElementById("username").value;
    var Password = document.getElementById("Password").value;
    var conform_Password = document.getElementById("conform-Password").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;

    if (username == "") {
        document.getElementById("user").style.color = 'red';
        document.getElementById("user").innerHTML = "**empty username is not allowed**";


    } else if (!isNaN(username)) {
        document.getElementById("user").style.color = 'red';
        document.getElementById("user").innerHTML = "**only characters are allowed**"

    } else if ((username.length <= 3) || (username.length > 30)) {
        document.getElementById("user").style.color = 'red';
        document.getElementById("user").innerHTML = "characters between 3 to 30"
    } else {
        document.getElementById("user").style.color = 'green';
        document.getElementById("user").innerHTML = "Username accepted "
    }

    if (Password == "") {
        document.getElementById("pass").style.color = 'red';
        document.getElementById("pass").innerHTML = "fillup password"
    } else if ((Password.length <= 5) || (Password.length >= 15)) {
        document.getElementById("pass").style.color = 'red';
        document.getElementById("pass").innerHTML = "between 6 to 15 charaster password"
    } else {
        document.getElementById("pass").style.color = 'green';
        document.getElementById("con-Password").style.color = 'green';
        document.getElementById("pass").innerHTML = "accepted"
        document.getElementById("con-Password").innerHTML = "accepted"
    }
    if (conform_Password != Password) {
        document.getElementById("con-Password").style.color = 'red';
        document.getElementById("con-Password").innerHTML = "password doesn't match"
    }
    if (mobile.length != 10) {
        document.getElementById("mob").style.color = 'red';
        document.getElementById("mob").innerHTML = "check mobile num"
    } else {
        document.getElementById("mob").style.color = 'green';
        document.getElementById("mob").innerHTML = "accepted"
    }

}