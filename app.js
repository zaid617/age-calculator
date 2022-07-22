function calculate() {
    let dateOfBirth = document.getElementById('dob').value;
    let today = new Date();
    let dob = new Date(dateOfBirth);
    let todayTime = today.getTime();
    let todayYear = today.getFullYear();
    let dobYear = dob.getFullYear();
    let dobday = dob.getDay();
    let dobmonth = dob.getMonth();
    let nextyear = today.getFullYear()+1;
    let nextBirthDay = new Date (nextyear, dobmonth, dobday)
    let nextBirthDayTime = nextBirthDay.getTime()
    let age = todayYear - dobYear;
    let daysLeft = Math.floor((nextBirthDayTime-todayTime)/(1000*60*60*24))

    
    console.log("Days left for next birthday:" ,daysLeft);
    console.log("Birth Year:", dobYear);
    console.log("Current Year:", todayYear);
    console.log("Age:", age);
}

calculate()