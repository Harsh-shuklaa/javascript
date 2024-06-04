const accountId =14458
let accountEmail = "harsh382794@gmail.com"
var accountPassword ="harsh1212"
aaccountCity = "hisar"

/*
const is not changed because of issue in block scope and functional scope
let is changable
 prefer not to use var
*/


//accountId =234  // Not allowed
console.log(accountId);
accountEmail = "ahs@1233gmail.com"
accountPassword = "1234578"
accountCity = "jaipur"
let accountState ; // Undefined
console.table([accountPassword,accountEmail ,accountCity,accountState]); 
