
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");

function setDate(){
const now = new Date();
const seconds = now.getSeconds(); 
const minutes = now.getMinutes();
const secondsDegrees = ((seconds / 60) * 360);//using same logic to get degree,so the clock second move at interval
const minutesDegrees = ((minutes / 60) * 360);
secondHand.style.transform = `rotate(${secondsDegrees}deg)`
minHand.style.transform = `rotate(${minutesDegrees}deg)`

console.log(seconds);
console.log(minutes);
}




setInterval(setDate, 1000);