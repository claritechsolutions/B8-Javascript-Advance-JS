class info {
    constructor() {
        // this.country = country;
        // this.capital = capital;
        // this.continent = continent;
        // this.country = ['India', 'uk', 'japan'];
        this.data = [{
                country: "INDIA",
                capital: 'New Delhi',
                continent: 'Asia'
            },
            {
                country: 'UK',
                capital: 'ENGLAND',
                continent: 'EUROPE'
            },
            {
                country: 'JAPAN',
                capital: 'TOKYO',
                continent: 'EUROPE'
            }
        ];
    }
    getInfo() {
        // alert();
        // var a = document.getElementById("ctr").value;
        // var a = document.getElementsByTagName("input").value;
        var a = document.querySelector('input').value;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data.country == a) {
                console.log(a);
                document.getElementById("ans").innerHTML = (`The capital of country is ${this.data[i].capital} & it is in ${this.data[i].continent} continent`);
            } else {
                document.getElementById("ans").innerHTML = ("Input given Invalid");
            }
        }
    }
}
var cnt = new info();
// var country2 = new info('USA', ' NEW YORK CITY', 'NORTH AMERICA')
// var country3 = new info('UK', 'ENGLAND', 'EUROPE')
// var country4 = new info('JAPAN', 'TOKYO', 'ASIA')
// var country5 = new info('SOUTH AFRICA', 'CAPE TOWN', 'AFRICA')
// country1.getinfo();
// country2.getinfo();
// country3.getinfo();
// country4.getinfo();
// country5.getinfo();


// var b = document.getElementById("btn")
// b.addEventListener("click",country2.getinfo())

// console.log(country1.getinfo())
// console.log(country1.capital)
// console.log(country1.continent)
// console.log(country1)