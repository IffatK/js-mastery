// primitive datatype
//7 types : String , Number , Boolean , null, undefined ,Symbol,BigInt

/* const score = 100
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
console.log(typeof myObj) */


// ================================

//stack (primitive) , Heap (non-premitive)

let myYoutubeName = "kiffat411@gmail.com"
let anotherName = myYoutubeName
anotherName = 'chaiaurCode'
// console.log(myYoutubeName)
// console.log(anotherName)


let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let user2 = userOne
user2.email = "user2@gmail.com"
console.log(userOne.email)
console.log(user2.email)