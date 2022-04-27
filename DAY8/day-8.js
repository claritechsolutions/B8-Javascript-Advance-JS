const country = ["INDIA", "UK", "DENMARK", "FINLAND", "FRANCE", "ITALY", "US", "RUSSIA", "JAPAN"]
const city = ["DELHI","ENGLAND","COPENHEGAN"]
document.getElementById("arr").innerHTML = (country.toString());

//document.getElementById("ind").innerHTML = country.splice(country.indexOf("UK"), 1);
//document.getElementById("ind1").innerHTML = country

//document.getElementById("spl").innerHTML = country.splice(2, 0, "BRAZIL", "RSA",);
//document.getElementById("spl1").innerHTML = country

//document.getElementById("replace").innerHTML = (country.splice(2, 2, "BRAZIL", "RSA",));
//document.getElementById("replace1").innerHTML = country;

//document.getElementById("merge").innerHTML = (country.concat(city));

document.getElementById("copy").innerHTML = [...country];
document.getElementById("copy1").innerHTML = [...city];
