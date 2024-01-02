const clockDisplay = document.querySelector('#clock');

function getAndUpdateDateAndTime ()
{
    let currentDate = new Date();
    currentDate = formatDate(currentDate);
    clockDisplay.innerText = currentDate;
};

function formatDate (date)
{
    let day          = date.getDate();
    let month        = date.getMonth() + 1;
    let year         = date.getFullYear();
    let dayOfWeek    = date.getDay();

    let hour         = date.getHours();
    let minutes      = date.getMinutes();
    let seconds      = date.getSeconds();
    let milliseconds = date.getMilliseconds();

    switch (dayOfWeek) {
        case 0:
            dayOfWeek = "Sunday";
            break;
        case 1:
            dayOfWeek = "Monday";
            break;
        case 2:
            dayOfWeek = "Tuesday";
            break;
        case 3:
            dayOfWeek = "Wednesday";
            break;
        case 4:
            dayOfWeek = "Thursday";
            break;
        case 5:
            dayOfWeek = "Friday";
            break;
        case 6:
            dayOfWeek = "Saturday";
            break;
    };

    let dayOrNight = hour >= 12 ? "p.m." : "a.m.";
    hour = (hour % 12) || 12;

    if (minutes < 10) {
        minutes = "0" + minutes;
    };

    if (seconds < 10) {
        seconds = "0" + seconds;
    };

    if (milliseconds < 100) {
        milliseconds = "0" + milliseconds;
    }
    else if (milliseconds < 10) {
        milliseconds = "00" + milliseconds;
    };

    return `${day}/${month}/${year} ${dayOfWeek} \n
            ${hour}:${minutes}:${seconds} ${dayOrNight}`;
};

setInterval(getAndUpdateDateAndTime, 500);