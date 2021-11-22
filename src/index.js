const chalk = require('chalk')

console.log(chalk.bgRed('Hello YSE!!!'))
console.log(chalk.green('Hello YSE!!!'))

const lat = process.argv[2]
const lng = process.argv[3]

const cities = require('cities')

if (lat && lng) {
    let city = cities.gps_lookup(lat, lng)
    console.log(city)
}