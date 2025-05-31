const accountID = 696969
let accountEmail = "akshat@gmail.com"
var accountPassword = "12345678"
accountCity = "Roorkee"
let accountState; 

//accountID = "99999"   // is used for single line comments 
accountEmail = "negi@gmail.com"
accountPassword = "00000000"
accountCity = "dheradun"

/*
We dont use (var) for variables in JS insted we use (const) or (let) for variables
because of issue in block scope & functional scope
*/

console.log (accountID);

console.table([accountEmail, accountPassword, accountCity, accountID, accountState]);