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

let speechSynth = window.speechSynthesis;
let speaker = document.querySelector('.fa-volume-up');

// decalring variables outside of the function for easier use later in code
let hours, minutes, seconds;
// this function will give animation to our clock hands depending on the current time set by the Date object
function setTime() {
  const time = new Date();

  /* it goes in order seconds < minutes < hours 
  because we want to make calculations with each time propery
  and we can't do that unless each property is created before called */
  seconds = time.getSeconds();
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  secondHand.style.transition = 'transform 0.5s';

  minutes = time.getMinutes();
  minuteHand.style.transform = `rotate(${
    ((minutes + seconds / 60) / 60) * 360
  }deg)`;

  hours = time.getHours();
  hourHand.style.transform = `rotate(${
    ((hours + minutes / 60) / 12) * 360
  }deg)`;
}

// on click this function uses Web Speech API to output voice data on text input
speaker.onclick = function () {
  let currentTime = new SpeechSynthesisUtterance(
    `Current time is ${hours} ${minutes}`
  );
  speechSynth.speak(currentTime);
};

cloneTicks();
// setInterval will call setTime function every second
setInterval(setTime, 1000);
