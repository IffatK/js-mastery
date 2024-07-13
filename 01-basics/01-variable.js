const accountId = 14455
let accountEmail = "Iffat@google.com"
var accountPassword = "12345"
accountCity = "Kurla"

// accountId = 1368 // not allowed 
accountEmail = "Iffat1234@google.com"
accountPassword = "12345"
// prefer not to use var because of issue in block scope and functional scope

console.log(accountId);
console.table([accountEmail ,accountId,accountPassword,accountCity])