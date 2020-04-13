/*cloneTicks function positions clock ticks in the right timeframe, 
minuteTicks: smaller spread ticks and 
fiveMinuteTicks: bigger spread ticks*/
function cloneTicks() {
  for (let i = 0; i <= 60; i++) {
    let minuteTicks = document.querySelector('.minclock');
    let clone = minuteTicks.cloneNode(true);
    document.querySelector('#clockframe').appendChild(clone);
    clone.style.transform = `rotate(${i * 6}deg)`;
  }

  for (let i = 0; i <= 12; i++) {
    let fiveMinuteTicks = document.querySelector('.fiveminclock');
    let clone = fiveMinuteTicks.cloneNode(true);
    document.querySelector('#clockframe').appendChild(clone);
    clone.style.transform = `rotate(${i * 30}deg)`;
  }
}

// catching clock hands as DOM objects in variables for easier use in our code
let hourHand = document.querySelector('.hour');
let minuteHand = document.querySelector('.min');
let secondHand = document.querySelector('.sec');

// this function will give animation to our clock hands depending on the current time set by the Date object
function setTime() {
  let time = new Date();

  let hours = time.getHours();
  hourHand.style.transform = `rotate(${hours * 30}deg)`;

  let minutes = time.getMinutes();
  minuteHand.style.transform = `rotate(${minutes * 6}deg)`;

  let seconds = time.getSeconds();
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  secondHand.style.transition = 'transform 0.5s';
}

cloneTicks();
// setInterval will call setTime function every second
setInterval(setTime, 1000);
