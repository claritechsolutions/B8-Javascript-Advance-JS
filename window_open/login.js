function login(){
var username =document.getElementById('user').value;
var pass = document.getElementById('password').value;

if(username =="world" && pass =="1234")
{
    window.open('welcome.html');
    
}
else{
window.alert("login failed");
}
}