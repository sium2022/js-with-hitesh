const accountId = 14421;
let accountEmail = "sium@google.com";
var accountPassword = "12345"
let accountDivision;

//don't write variable like this
accountCity = "Dhaka";

//accountId = 2;

/*
prefer not to use "var" because issues in block scope and functional scope
*/

accountEmail = "sm@sm.com";
accountPassword = 2121221;
accountCity = "Bogra";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountDivision]);