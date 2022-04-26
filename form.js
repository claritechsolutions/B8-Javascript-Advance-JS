function validation(){

    var user = document.getElementById('user').value ;
    if(user =="")
    document.getElementById('username').innerHTML=" **please fill the username field";
    return false;
}
