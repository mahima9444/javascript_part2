const clock = document.getElementById("clock");

// start a clock

let hours = '00';
let minutes = '00';

const startClock = function () {
  intervalId = setInterval(function () {
    let date = new Date();
    console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
  }, 1000);
//   intervalId = setInterval(function () {
//     let date = new Date();
//     console.log(date.toLocaleTimeString());
//     clock.innerHTML = date.getMinutes();
//   }, 1000);
//   intervalId = setInterval(function () {
//     let date = new Date();
//     console.log(date.toLocaleTimeString());
//     clock.innerHTML = date.getHours();
//   }, 1000);
};

document.querySelector("#start").addEventListener("click", startClock);

// stop the clock

const stopClock = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#stop").addEventListener("click", stopClock);
