const subject =["Physics", "Chemistry", "Mathematics", "English", "Biology"];
document.getElementById('sub').innerHTML= subject;
function Arraytostring(){
 var output = subject.toString();
 //var last =document.getElementById("p1").innerHTML;
  document.getElementById("result").innerHTML= output;
  
 }
function Push(){
    subject.push("History");
    var output = subject;
    document.getElementById("result").innerHTML= output;
}
function Pop(){
    subject.pop();
    var output = subject;
    document.getElementById("result").innerHTML= output;

}

function Shift1()
{
    debugger;
  //   subject =["Physics, Chemistry, Mathematics, English, Biology"];
   subject.shift();
  //subject.shift();
  // alert(output);
   // alert('hi');
    var output1 = subject;
    document.getElementById("result").innerHTML= output1;

}
function Unshift(){
    subject.unshift("History");
    var output = subject;
    document.getElementById("result").innerHTML= output;

}

function Splice(){
    subject.splice(2, 2);
    var output = subject;
    document.getElementById("result").innerHTML= output;
}