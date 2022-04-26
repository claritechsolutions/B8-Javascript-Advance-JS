function add(){
    //alert("working");
    var n1 = parseInt(document.getElementById("n1").value) ;
    var n2 = parseInt(document.getElementById("n2").value );
    //alert(n1);
    //alert(typeof(n1));
    var sum =n1+n2;
    document.getElementById("res").innerHTML=sum;
}
function sub(){
    //alert("working");
    var n1 = parseInt(document.getElementById("n1").value) ;
    var n2 = parseInt(document.getElementById("n2").value );
    //alert(n1);
    //alert(typeof(n1));
    var sub =n1-n2;
    document.getElementById("res").innerHTML=sub;
}
function mul(){
    //alert("working");
    var n1 = parseInt(document.getElementById("n1").value) ;
    var n2 = parseInt(document.getElementById("n2").value );
    //alert(n1);
    //alert(typeof(n1));
    var mul =n1*n2;
    document.getElementById("res").innerHTML=mul;
}
function divi(){
    //alert("working");
    var n1 = parseInt(document.getElementById("n1").value) ;
    var n2 = parseInt(document.getElementById("n2").value );
    //alert(n1);
    //alert(typeof(n1));
    var div =n1/n2;
    document.getElementById("res").innerHTML=div;
}