var fruits=["Apple","Banana","Mango","Watermelon","cherry"];
for (var key in fruits)
    { 
        var obj = fruits[key]; 
        var string = obj + " "; 
        document.getElementById("input1").value += string;
         
    }
    var splice=document.querySelector('#splice_item');
    splice.onchange= function(element){
        const start = fruits.indexOf("Mango");
        const deletecount=1;
        fruits.splice(start,deletecount);
        document.getElementById("input2").value = fruits;
    };
    var splice=document.querySelector('#splice_item1');
    splice.onchange= function(element){
        fruits.splice(2,0,"Kiwi","Rasberry");
        document.getElementById("input2").value = fruits;
    };
    var splice=document.querySelector('#replace_item');
    splice.onchange= function(element){
        const start=-2;
        const deletecount=2;
        const removeitems=fruits.splice(start,deletecount,"Kiwi","Rasberry");
        document.getElementById("input2").value = fruits;
    };
    var splice=document.querySelector('#iterate_array');
    splice.onchange= function(element){
       for (const fruitname of fruits)
       {document.getElementById("input2").value = fruitname;}
    };
    var splice=document.querySelector('#concat_array');
    splice.onchange= function(element){
       const extrafruits=["pulm","pomogranate"];
       const combinefruits=fruits.concat(extrafruits);
        document.getElementById("input2").value = combinefruits;
    };
    var splice=document.querySelector('#copy_array');
    splice.onchange= function(element){
        const extrafruits=["pulm","pomogranate"];
        const copyextrafruits=[...extrafruits];
        document.getElementById("input2").value = copyextrafruits;
    };
    function newFunction() {
        document.getElementById("myForm").reset();
        document.getElementById("input2").value =" ";
        fruits=["Apple","Banana","Mango","Watermelon","cherry"];
         }
