const myName = "Iffat"
const repoCount = 10

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`)
const gameName = new String('histamine')
/* console.log(gameName)
console.log(gameName[1])
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1)) */

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "  Iffat khan  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://youtube%20.com"
console.log(url.replace('%20',''))

console.log(url.includes('youtube'))
console.log(url.includes('sundarmama'))
let game = "Mario-Explore-aks"
console.log(game.split('-'))

