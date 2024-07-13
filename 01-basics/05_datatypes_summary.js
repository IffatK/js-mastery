// primitive datatype
//7 types : String , Number , Boolean , null, undefined ,Symbol,BigInt

const score = 100
const scoreValue = 100
const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id  = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId) //false
console.log(id == anotherId)//false


const bigNumber = 347549890290102783478920n //BigInt

//non premitive or reference datatype
// Arrays, Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name :"iffat",
    age :18,
}

console.log(heros)
console.log(myObj)

const myFunction = function()
{ console.log("hellow")}
myFunction()

console.log(typeof bigNumber)
console.log(typeof heros)
console.log(typeof myFunction)
console.log(typeof myObj)