var cities = ['Mumbai','Chennai','Kolkata','Delhi','Nagpur','Jaipur'];

    for (var key in cities)
    { 
        var obj = cities[key]; 
        var string = obj + " "; 
        document.getElementById("input1").value += string;
         
    }

   /* var pop = document.querySelector('#pop_item');

    pop.addEventListener('change', function(element) {
        cities.pop();
    	document.getElementById("input2").value = cities;
    });*/

    var pop = document.querySelector('#pop_item');
    pop.onchange = function(element) {
    cities.pop();
    document.getElementById("input2").value = cities;
    };

    var push = document.querySelector('#push_item');
    push.onchange = function(element) {
    cities.push('Hydrabad');
    document.getElementById("input2").value = cities;
    };

    var shift = document.querySelector('#shift_item');
    shift.onchange = function(element) {
    cities.shift('');
    document.getElementById("input2").value = cities;
    };

    var splice = document.querySelector('#splice_item');
    splice.onchange = function(element) {
    cities.splice(2, 0, "Pune", "Raipur");
    document.getElementById("input2").value = cities;
    };

    var sort = document.querySelector('#sort_item');
    sort.onchange = function(element) {
    var sort1 = cities.sort();
    document.getElementById("input2").value = sort1;
    };

    var unshift = document.querySelector('#unshift_item');
    unshift.onchange = function(element) {
    cities.unshift("Pune", "Raipur");
    document.getElementById("input2").value = cities;
    };

    var join = document.querySelector('#join_item');
    join.onchange = function(element) {
    var join1 = cities.join(" and ");
    document.getElementById("input2").value = join1;
    };

    var indexof = document.querySelector('#indexof_item');
    indexof.onchange = function(element) {
    var index1 = cities.indexOf("Delhi");
    document.getElementById("input2").value = "Index of Delhi city is : " + index1;
    };

    function newFunction() {
    document.getElementById("myForm").reset();
    document.getElementById("input2").value =" ";
    cities = ['Mumbai','Chennai','Kolkata','Delhi','Nagpur','Jaipur'];
     }
