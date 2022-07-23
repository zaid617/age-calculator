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

    let nextBirthyear;

    {
        if (todayMonth == monthOfDOB) {

            if (todayDate > dateOfDOB) {
                nextBirthyear = todayYear + 1
                let nextBirthyearTime = new Date(nextBirthyear, monthOfDOB, dateOfDOB).getTime();
                let daysLeft = Math.floor((nextBirthyearTime - todayTime) / (1000 * 60 * 60 * 24));
                days.value = daysLeft;
                ages.value = age
                console.log("Birthday", dob);
                console.log("age", age);
                console.log(daysLeft, " days are left");
                return
            }

            else if (todayDate < dateOfDOB) {
                nextBirthyear = todayYear
                let nextBirthyearTime = new Date(nextBirthyear, monthOfDOB, dateOfDOB).getTime()
                let daysLeft = Math.floor(( nextBirthyearTime - todayTime) / (1000 * 60 * 60 * 24));
                console.log("days left:", daysLeft );
                days.value = daysLeft;
                ages.value = age
                return

            }
            else if (todayDate === dateOfDOB) {
                let daysLeft = 00
                days.value = daysLeft;
                ages.value = age
                console.log(daysLeft);
                return
            }
        }
        {
            if (todayMonth < monthOfDOB) {
                nextBirthyear = todayYear
                let nextBirthyearTime = new Date(nextBirthyear, monthOfDOB, dateOfDOB).getTime()
                let daysLeft = Math.floor((nextBirthyearTime - todayTime) / (1000 * 60 * 60 * 24));
                days.value = daysLeft;
                ages.value = age;
                console.log("Birthday", dob);
                console.log("age", age);
                console.log("days left", daysLeft);
                return
            }
        } {
            if (todayMonth > monthOfDOB) {
                nextBirthyear = todayYear + 1
                let nextBirthyearTime = new Date(nextBirthyear, monthOfDOB, dateOfDOB).getTime();
                let daysLeft = Math.floor((nextBirthyearTime - todayTime) / (1000 * 60 * 60 * 24));
                days.value = daysLeft;
                ages.value = age;
                console.log("Birthday", dob);
                console.log("age", age);
                console.log(daysLeft, " days are left");
                return
            }

        }
    }



}



