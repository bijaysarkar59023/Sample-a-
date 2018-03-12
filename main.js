var countdown = document.querySelector(".countdown");

// get final day in ms
var finalDay = new Date("jan 1, 2019 13:00:00").getTime();

// update every second

var intvl = setInterval(function(){
// Get today's time and date in ms
var today = new Date().getTime();

// Distance from finalDay
var distance = finalDay - today;

// Time calculation
var days = Math.floor(distance/(1000*60*60*24));
var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var munites = Math.floor((distance%(1000*60*60))/(1000*60));
var seconds = Math.floor((distance%(1000*60))/1000);

// Display Result
countdown.innerHTML = `
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${munites}<span>Munites</span></div>
<div>${seconds}<span>Seconds</span></div>`;
},1000);



