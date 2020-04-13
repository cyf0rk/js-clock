// function cloneTicks() {
//   for (let i = 0; i <= 12; i++) {
//     let fiveMinutes = document.querySelector('.fiveminutes');
//     fiveMinutes.cloneNode(true);
//   }
// }

// cloneTicks();

let hour = document.querySelector('.hour');
let minute = document.querySelector('.min');
let second = document.querySelector('.sec');

function setTime() {
  let date = new Date();

  let dateHour = date.getHours();
  hour.style.transform = `rotate(${dateHour * 30}deg)`;

  let dateMinute = date.getMinutes();
  minute.style.transform = `rotate(${dateMinute * 6}deg)`;

  let dateSecond = date.getSeconds();
  second.style.transform = `rotate(${dateSecond * 6}deg)`;
}

setInterval(setTime, 1000);
