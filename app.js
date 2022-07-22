function calculate() {

    let dob = document.getElementById('dob').value;
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayDate = today.getDate();
    let todayMonth = today.getMonth();
    let todayTime = today.getTime();
    let dateOfBirth = new Date(dob);
    let dateOfDOB = dateOfBirth.getDate();
    let monthOfDOB = dateOfBirth.getMonth();
    let yearOfDOB = dateOfBirth.getFullYear();
    let age = todayYear - yearOfDOB;
    let days = document.getElementById('days');
    let ages = document.getElementById('age');
    let dob2 = document.getElementById('dob2');
    let nextBirthyear;

    if (todayMonth > monthOfDOB) {
        nextBirthyear = todayYear + 1
        let nextBirthyearTime = new Date(nextBirthyear, monthOfDOB, dateOfDOB).getTime();
        let daysLeft = Math.floor((nextBirthyearTime - todayTime) / (1000 * 60 * 60 * 24));
        days.value = daysLeft;
        ages.value = age;
        dob2.value = dateOfDOB + "/" + (monthOfDOB+1) + "/" + yearOfDOB;
        console.log(daysLeft, " days are left");
    }
    else if (todayMonth < monthOfDOB) {
        nextBirthyear = todayYear
        let nextBirthyearTime = new Date(nextBirthyear, monthOfDOB, dateOfDOB).getTime()
        let daysLeft = Math.floor((nextBirthyearTime - todayTime) / (1000 * 60 * 60 * 24));
        days.value = daysLeft;
        ages.value = age
        dob2.value = dateOfDOB + "/" + (monthOfDOB+1) + "/" + yearOfDOB;
        console.log("your birthday passed :", daysLeft + "day ago");
    }
    else if (todayMonth == monthOfDOB) {

        if (todayDate > dateOfDOB) {
            nextBirthyear = todayYear + 1
            let nextBirthyearTime = new Date(nextBirthyear, monthOfDOB, dateOfDOB).getTime();
            let daysLeft = Math.floor((nextBirthyearTime - todayTime) / (1000 * 60 * 60 * 24));
            days.value = daysLeft;
            ages.value = age
            dob2.value = dateOfDOB + "/" +  (monthOfDOB+1) + "/" +  yearOfDOB;
            console.log(daysLeft, " days are left");
        }

        else if (todayDate < dateOfDOB) {
            nextBirthyear = todayYear
            let nextBirthyearTime = new Date(nextBirthyear, monthOfDOB, dateOfDOB).getTime()
            let daysLeft = Math.floor((todayTime - nextBirthyearTime) / (1000 * 60 * 60 * 24));
            console.log("your birthday passed :", daysLeft + "day ago");
            days.value = daysLeft;
            ages.value = age
            dob2.value = dateOfDOB + "/" +  (monthOfDOB+1) + "/" +  yearOfDOB;
        }
        else if (todayDate === dateOfDOB) {
            let daysLeft = "Its Your Birthday"
            days.value = daysLeft;
            ages.value = age
            dob2.value = dateOfDOB + "/" +  (monthOfDOB+1) + "/" +  yearOfDOB;
            console.log(daysLeft);
        }

    }

    

}



