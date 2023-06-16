const form = document.getElementById('form');
const userName = document.getElementById('name');
const userNumber = document.getElementById('card_number');
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc = document.getElementById('cvc');
const cvc2 = document.getElementsByClassName('white')[0];
const year2 = document.getElementsByClassName('year1')[0];
const month2 = document.getElementsByClassName('month1')[0];
const number = document.getElementsByClassName('number')[0];
const userName2 = document.getElementsByClassName('name2')[0];
const nameError = document.getElementsByClassName('name_error')[0];
const numberError = document.getElementsByClassName('card_error')[0];
const dateError = document.getElementsByClassName('date_error')[0];
const cvcError = document.getElementsByClassName('cvc_error')[0];
const success = document.getElementsByClassName("success")[0];

form.addEventListener("submit", (e)=> {
    let msg1 = []
    let msg2 = []
    let msg3 = []
    let msg4 = []

    const userNameValue = userName.value.trim()
    const numberValue = userNumber.value.trim()
    const monthValue = month.value.trim();
    const yearValue = year.value.trim()
    const cvcValue = cvc.value.trim()
    
    if (userNameValue == "" || userNameValue == null) {
        msg1.push("Name cannot be empty");
        userName.classList.add("active");
    } else {
        userName.classList.remove("active"); 
    }
    if (numberValue == "" || numberValue == null) {
        msg2.push("Name cannot be empty");
        userNumber.classList.add("active");
    } else {
        userNumber.classList.remove("active"); 
    }
    if (isNaN(numberValue)) {
        msg2.push("Wrong format, numbers only");
        userNumber.classList.add("active");
    } else {
        userNumber.classList.remove("active"); 
    }

    if (monthValue == "" || monthValue == null) {
        msg3.push("can't be empty");
        month.classList.add("active");
    } else {
        month.classList.remove("active"); 
    }

    if (yearValue == "" || yearValue == null) {
        msg3.push("can't be empty");
        year.classList.add("active");
    } else {
        year.classList.remove("active"); 
    }

    if (cvcValue == "" || cvcValue == null) {
        msg4.push("can't be empty");
        cvc.classList.add("active");
    } else {
        cvc.classList.remove("active"); 
    }

   // ...

    if (msg1.length > 0 || msg2.length > 0 || msg3.length > 0 || msg4.length > 0) {
        nameError.innerText = msg1;
        numberError.innerText = msg2;
        dateError.innerText = msg3;
        cvcError.innerText = msg4;
    } else {
        const groupedNumber = groupNumbers(numberValue);
        number.innerText = groupedNumber;
        cvc2.innerText = cvcValue;
        year2.innerText = yearValue;
        month2.innerText = monthValue; 
        userName2.innerText = userNameValue;
        form.style.display = "none";
        success.style.display = "flex"
        // ...
    }
    
    // ...
    
    function groupNumbers(number) {
        const groups = number.match(/.{1,4}/g); // Split the number into groups of four digits
        return groups.join('     '); // Join the groups with a space in between
    }
    
    
    e.preventDefault()
})