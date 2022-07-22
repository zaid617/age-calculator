function calculate() {
    // date of birth value from input box 
    let dateOfBirth = document.getElementById('dob').value;
    // current date get from pc
    let today = new Date();
    // date of birth value from input box and put in date function
    let dob = new Date(dateOfBirth);
    // apply getTime() function on today variable
    let todayTime = today.getTime();
    // apply getFullYear() function on today variable
    let todayYear = today.getFullYear();
    // apply getFullYear() function on dob variable
    let dobYear = dob.getFullYear();
    // apply getDay() function on dob variable and get day from dob
    let dobday = dob.getDay();
    // apply getMonth() function on dob variable and get Month from dob
    let dobmonth = dob.getMonth();
    // apply getFullYear() function on dob variable and add 1 to get next year
    let nextyear = today.getFullYear()+1;
    // calculate the next birthday
    let nextBirthDay = new Date (nextyear, dobmonth, dobday)
    // apply getTime() function on nextBirthday variable and get miliseconds 
    let nextBirthDayTime = nextBirthDay.getTime()
    // calculate age 
    let age = todayYear - dobYear;
    // calculate how many days are left in next birthday
    let daysLeft = Math.floor((nextBirthDayTime-todayTime)/(1000*60*60*24))

    console.log("Next Birthday: ", nextBirthDay);
    console.log("Days left for next birthday:" ,daysLeft);
    console.log("Birth Year:", dobYear);
    console.log("Current Year:", todayYear);
    console.log("Age:", age);
}

