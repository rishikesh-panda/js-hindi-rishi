const accountId = 1234
let accountEmail = "rishi@google.com"
var accountPassword = "12345"
accountCity = "bam"
let accountState; 

// accountId = 2 // not allowed


accountEmail = "rp@.com"
accountPassword = "2121212"
accountCity = "BBS"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not use var
because of issue in block scope and function scope
*/

/*
You do not always need a semicolon because JavaScript has Automatic Semicolon Insertion (ASI).
EX-: 1. console.log(); it is ok console.log() it is also ok 
     2. let.accountEmail = "rishi@google.com"; it is ok let.accountEmail = "rishi@google.com" it is also ok  
*/

