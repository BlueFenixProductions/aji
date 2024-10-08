//create a javascript file that exports a version number
//import fs module
import fs from 'fs'

//read the package.json file
const pkg = JSON.parse(fs.readFileSync('package.json'))

//make the major number 3. 3 is the magic number
pkg.version = '3.0.0'

//make the minor number this year minus 2010 - blue fenix rises.
pkg.version = `${pkg.version}.${new Date().getFullYear() - 2010}`

//make the patch number the combined month and day of the month
const month = new Date().getMonth() + 1

let day = new Date().getDate()

//add zero to the beginning of the day if it is only one digit
if (day < 10) {
    day = `0${day}`
}

pkg.version = `${pkg.version}.${month}${day}`

//write the package.json file
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2))

//write the version number to the console
console.log(`${pkg.name} version updated to ${pkg.version}. A Blue Fenix Prodcution. ${pkg.homepage}`)

//return the version number
export default pkg.version