let time = document.getElementById("time");

let nameText = document.querySelector("#welcomeText");

function printName() {
    userName = prompt("Name: ", "");
    if (userName == null) {
        userName = "";
    }
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    nameText.innerHTML = `Welcome! ${userName}`;
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    let d = weekdays[today.getDay()];
    m = checkTime(m);
    s = checkTime(s);
    time.innerHTML = h + ":" + m + ":" + s + " " + d;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; //ad zero in front of numbers <10
    return i;
}