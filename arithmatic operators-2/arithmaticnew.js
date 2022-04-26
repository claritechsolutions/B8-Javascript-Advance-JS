function addition(){
    var a=parseInt(document.getElementById('number1').value);
    var b=parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML=a+b;

}
function substraction(){
    var a = parseInt(document.getElementById('number1').value);
    var b=parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML=a-b;

}
function multiplication(){
    var a=parseInt(document.getElementById('number1').value);
    var b=parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML=a*b;

}
function division(){
    var a=parseInt(document.getElementById('number1').value);
    var b=parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML=a/b;

}
function remainder(){
    var a=parseInt(document.getElementById('number1').value);
    var b=parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML=a%b;

}