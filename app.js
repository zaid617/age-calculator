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
    let box1 = document.getElementById('box1')
    let box2 = document.getElementById('box2')

    let nextBirthyear;

    {
        if (todayMonth == monthOfDOB) {

            if (todayDate > dateOfDOB) {
                nextBirthyear = todayYear + 1
                let nextBirthyearTime = new Date(nextBirthyear, monthOfDOB, dateOfDOB).getTime();
                let daysLeft = Math.ceil((nextBirthyearTime - todayTime) / (1000 * 60 * 60 * 24));
                days.value = daysLeft;
                ages.value = age
                console.log("Birthday", dob);
                console.log("age", age);
                console.log(daysLeft, " days are left");
                box1.style.display = 'block'
                box2.style.display = 'block'
                return
            }

            else if (todayDate < dateOfDOB) {
                nextBirthyear = todayYear
                let nextBirthyearTime = new Date(nextBirthyear, monthOfDOB, dateOfDOB).getTime()
                let daysLeft = Math.ceil(( nextBirthyearTime - todayTime) / (1000 * 60 * 60 * 24));
                console.log("days left:", daysLeft );
                days.value = daysLeft;
                ages.value = age
                box1.style.display = 'block'
                box2.style.display = 'block'
                return

            }
            else if (todayDate === dateOfDOB) {
                let daysLeft = 00
                days.value = daysLeft;
                ages.value = age
                console.log(daysLeft);
                box1.style.display = 'block'
                box2.style.display = 'block'
                return
            }
        }
        {
            if (todayMonth < monthOfDOB) {
                nextBirthyear = todayYear
                let nextBirthyearTime = new Date(nextBirthyear, monthOfDOB, dateOfDOB).getTime()
                let daysLeft = Math.ceil((nextBirthyearTime - todayTime) / (1000 * 60 * 60 * 24));
                days.value = daysLeft;
                ages.value = age;
                console.log("Birthday", dob);
                console.log("age", age);
                console.log("days left", daysLeft);
                box1.style.display = 'block'
                box2.style.display = 'block'
                return
            }
        } {
            if (todayMonth > monthOfDOB) {
                nextBirthyear = todayYear + 1
                let nextBirthyearTime = new Date(nextBirthyear, monthOfDOB, dateOfDOB).getTime();
                let daysLeft = Math.ceil((nextBirthyearTime - todayTime) / (1000 * 60 * 60 * 24));
                days.value = daysLeft;
                ages.value = age;
                console.log("Birthday", dob);
                console.log("age", age);
                console.log(daysLeft, " days are left");
                box1.style.display = 'block'
                box2.style.display = 'block'
                return
            }

        }
    }



}



