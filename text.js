console.log("Vipul")
const accountId = 54644
let accountEmail = "a@gmail.com"
var accountPassword ="1111"
accountCity ="Mathura"

let accountState;

// accountId = 2

accountEmail = "ab@gmail.com"
accountPassword ="113311"
accountCity ="Mathurasss"



console.log(accountId)



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



issue in block scope and function scope => no var

"use strict";


let score = 33


// const {score} = req.body

console.log(typeof score);
console.log(typeof (score));