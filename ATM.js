let enterPIN = 1238
const correctPIN = 1238
let checkPIN = (enterPIN == correctPIN)
let amount = 1100
let balance = 1000
let checkbalance = (balance >= amount)

const atmWithdrawal = (checkPIN, checkbalance) => {if (checkPIN==true && checkbalance==true) {console.log(`Dispensing £${amount}`)}
else if (checkPIN==true && checkbalance==false) {console.log("Insufficent funds")}
else {console.log("Incorrect PIN")}}

atmWithdrawal (checkPIN, checkbalance)
