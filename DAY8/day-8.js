const country = ["INDIA", "UK", "DENMARK", "FINLAND", "FRANCE", "ITALY", "US", "RUSSIA", "JAPAN"]

//document.getElementById("ind").innerHTML = country.splice(country.indexOf("UK"), 1);
//document.getElementById("ind1").innerHTML = country

document.getElementById("spl").innerHTML = country.splice(2, 0, "BRAZIL");
document.getElementById("spl").innerHTML = country