
class info {
    constructor(country, capital, continent) {
        this.country = country
        this.capital = capital
        this.continent = continent
    }
    getinfo() {
        return (`Name of the Country = ${this.country} `)
    }
}
let country1 = new info('INDIA', 'NEW DELHI', 'ASIA')
let country2 = new info('USA', ' NEW YORK CITY', 'NORTH AMERICA')
let country3 = new info('UK', 'ENGLAND', 'EUROPE')
let country4 = new info('JAPAN', 'TOKYO', 'ASIA')
let country5 = new info('SOUTH AFRICA', 'CAPE TOWN', 'AFRICA')
console.log(country1.getinfo())
console.log(country1.capital)
console.log(country1.continent)
console.log(country1)
