function checkPrime() {
    num = document.getElementById("number").value;
    if(num == '' || num < 1) {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Please Enter a Valid Number";
    return;
    }
    var i;
    var flag = true;
    if (num == 1) {
    flag = false;
    } else {
    for(i = 2; i < num-1; i++) {
    if (num % i == 0) {
    flag = false;
    break;
    }
    }
    }
    if(flag == true) {
    document.getElementById("result").style.color = "blue";
    document.getElementById("result").innerHTML = "The number: " + num + " is a Prime Number";
    } else {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "The number: " + num + " is NOT a Prime Number";
}
}