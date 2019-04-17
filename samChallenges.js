/*Challenge 1 - Create a variable called password.
Check how many letters are in the password, if there
are less than 8 log to the console that the password
is too short. Otherwise log the password to the
console.*/

let password = "h"

if (password.length <= 8) {
    console.log ("Password is too short")
}
else {
    console.log ("Log in")
}

/*Challenge 2 - Create a variable called num.
Check if the variable is divisible by 3 or 5. If it is log
“This number is divisible by 3 or 5” to the console.
Otherwise log “This number is not divisible by 3 or 5”.*/

let num = 5

if (num % 3 == 0 || num % 5 == 0) {
    console.log ("This number is divisible by 3 or 5")
}
else {
    console.log ("This number is not divisible by 3 or 5")
}

/*Challenge 3 - Create a variable called num.
If num is divisible by 3 log “fizz” to the console, if it’s
divisible by 5 log “buzz” to the console, if it’s divisible
by both 3 and 5 log “fizz buzz” to the console.
Otherwise log num to the console.*/

if (num % 3 == 0) {
    console.log ("Fizz")
}
else if (num % 5 == 0) {
    console.log ("Buzz")
}
else if (num % 3 == 0 && num % 5 == 0) {
    console.log ("Fizzbuzz")
}
else {console.log (num)}

/*Challenge 4 - Create a variable called num.
Check if the number is a palindrome (looks the same
forward as it does backwards e.g. 1001 or 20202).*/

let number = 9574629

if (number.toString() === number.toString().split("").reverse().join("")) {
    console.log (true)
}
else {
    console.log (false)
}


/*Challenge 5 - Create a variable called time, a variable called
placeOfWork and a variable called townOfHome.
Create an if statement that logs to the console
where someone is at times of the day. E.g. if the time
is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.*/

let time = "20:10:00"
let placeOfHome = "Salford"
let placeofWork = "Manchester"

if (time <= "08:00:00") {
    console.log (`At ${time} I am in ${placeOfHome}`)
}
else if (time <= "17:00:00") {
    console.log (`At ${time} I am in ${placeofWork}`)
}
else {console.log (`I am in ${placeOfHome}`)}
