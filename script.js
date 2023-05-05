const button = document.querySelector('.submit-button');
const dayError = document.querySelector('.dayError');
const monthError = document.querySelector('.monthError');
const yearError = document.querySelector('.yearError');
const dayTitle = document.querySelector('.day-title');
const monthTitle = document.querySelector('.month-title');
const yearTitle = document.querySelector('.year-title');
const outYear = document.querySelector('.year-out');
const outMonth = document.querySelector('.month-out');
const outDay = document.querySelector('.day-out');
const d = new Date();
let currentYear = d.getFullYear();
let currentMonth = d.getMonth();
let currentDay = d.getDate();
currentMonth += 1;
button.addEventListener('click', () => {
    var day = Number(document.querySelector('.inpDay').value);
    var month = Number(document.querySelector('.inpMonth').value);
    var year = Number(document.querySelector('.inpYear').value);
    if (isNaN(day)) {
        dayError.innerText = `Not a number`;
        dayTitle.style.color = "hsl(0, 100%, 67%)";
    } else if (isNaN(month)) {
        monthError.innerText = `Not a number`;
        monthTitle.style.color = "hsl(0, 100%, 67%)";
    } else if (isNaN(year)) {
        yearError.innerText = `Not a number`;
        yearTitle.style.color = "hsl(0, 100%, 67%)";
    } else if (day == "" || day == null) {
        dayError.innerText = `This field is required`;
        dayTitle.style.color = "hsl(0, 100%, 67%)";
    } else if (month == "" || month == null) {
        monthError.innerText = `This field is required`;
        monthTitle.style.color = "hsl(0, 100%, 67%)";
    } else if (year == "" || year == null) {
        yearError.innerText = `This field is required`;
        yearTitle.style.color = "hsl(0, 100%, 67%)";
    } else if ((month == 02 || month == 04 || month == 06 || month == 09 || month == 11) && day > 30) {
        dayError.innerText = `Date error`;
        dayTitle.style.color = "hsl(0, 100%, 67%)";
    } else if (day > 31) {
        dayError.innerText = `Date error`;
        dayTitle.style.color = "hsl(0, 100%, 67%)";
    } else if (month > 12) {
        monthError.innerText = `Date error`;
        monthTitle.style.color = "hsl(0, 100%, 67%)";
    } else if (year > currentYear) {
        yearError.innerText = `Date error`;
        yearTitle.style.color = "hsl(0, 100%, 67%)";
    } else {
        if (month > currentMonth) {
            outYear.innerText = (currentYear - 1) - year;
            outMonth.innerText = (12 + currentMonth) - month;
            outDay.innerText = Math.abs(currentDay - day);
        } else if (month < currentMonth) {
            outYear.innerText = currentYear - year;
            outMonth.innerText = currentMonth - month;
            outDay.innerText = Math.abs(currentDay - day);
        } else {
            if (day < currentDay) {
                outYear.innerText = currentYear - year;
                outMonth.innerText = currentMonth - month;
                outDay.innerText = Math.abs(currentDay - day);
            } else if (day > currentDay) {
                outYear.innerText = (currentYear - 1) - year;
                outMonth.innerText = (12 + currentMonth) - month;
                outDay.innerText = Math.abs(currentDay - day);
            } else {
                outYear.innerText = currentYear - year;
                outMonth.innerText = currentMonth - month;
                outDay.innerText = Math.abs(currentDay - day);
            }
        }
    }
});
