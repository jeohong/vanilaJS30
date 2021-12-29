const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function currentDate() {
    const date = new Date();
    const seconds = date.getSeconds();
    const seconsOfDegree = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${seconsOfDegree}deg)`;

    const minute = date.getMinutes();
    const minOfDegree = ((minute/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minOfDegree}deg)`;

    const hour = date.getHours();
    const hourOfDegree = ((hour/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourOfDegree}deg)`;
}

function digitTime() {
    const now = new Date();
    const time = document.querySelector(".digit-clock");
    const hour = String(now.getHours()).padStart(2,"0");
    const min = String(now.getMinutes()).padStart(2,"0");
    const second = String(now.getSeconds()).padStart(2,"0");

    time.innerHTML = `${hour}:${min}:${second}`;
}
currentDate();
setInterval(currentDate, 1000);
digitTime();
setInterval(digitTime, 1000);