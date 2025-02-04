const accountId=1111
let accountName = "HDFC"
var accountPassword= "12345"
accountCity= "jaipur"
let accountState ;

/*
Prefer not to use var because of issue in 
block space and functional space
*/

console.log(accountId);
console.table([accountId,accountName,accountPassword,accountCity,accountState]);
