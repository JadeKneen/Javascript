/*
	does a thing	
*/

/*
function some_Time(Time, d) {
if (d === "Sunday") {
if (Time > 8 && Time < 18) {
return "shop is open"
} else {
return "shop is closed"
}
} else if (d === "Saturday") {
if (Time > 8 && Time < 18) {
return "shop is open"
} else {
return "shop is closed"
}
} else if (Time > 6 && Time < 20) {
return "shop is open"
} else {
return "shop is closed"
}
}


console.log(some_Time(14, "Sunday"));
*/

//Multiple function checks to see if a shop is open depending on the day and time

//First function checks if it is a weekday or weekend as this affects opening hours.

function checkDay (Day, Time) {
    if ("Sunday"||"Saturday") {
        return checkWeekendTime (Time)
    }
    else {
        return checkWeekdayTime (Time)
    }
}

//If it is a weekend then this function will work out if the shop is open or closed by using the weekend opening times.
function checkWeekendTime (Time) {
    if (Time>8 && Time<18) {
        return "Shop is open"
    }
    else {
        return checkWeekdayTime (Time)
    }
}

//If it is a weekday then this function will work out if the shop is open or closed by using weekday opening times.
function checkWeekdayTime (Time) {
    if (Time>6 && 20<Time) {
        return "Shop is open"
    }
    else {
        return "Shop is closed"
    }    
}


console.log (checkDay ("Monday", 1))