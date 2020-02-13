
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
const now = new Date();

const seconds = now.getSeconds(); //getSeconds is inbuilt function
const mins = now.getMinutes();
const hours = now.getHours();

const secondsDegrees = ((seconds / 60) * 360) + 90;//using same logic to get degree,so the clock second move at interval
const minutesDegrees = ((mins / 60) * 360) + 90;
const hoursDegrees = ((mins / 12) * 360)  + 90;


secondHand.style.transform = `rotate(${secondsDegrees}deg)`

minHand.style.transform = `rotate(${minutesDegrees}deg)`

hourHand.style.transform = `rotate(${hoursDegrees}deg)`


console.log(seconds);
console.log(mins);
console.log(hours);
}

setInterval(setDate, 1000);