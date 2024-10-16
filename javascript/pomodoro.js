const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
var timerpanel = document.getElementById("timer-panel");
var themepanel = document.getElementById("theme-panel");
const hidebtn = document.getElementById("hide-btn")
let colorPicker = document.querySelector('#color-picker');
let imgBg = document.querySelector("#img-list");
let colorBg = document.querySelector('#color-list');
const rainbtn = document.querySelector(".rain-btn");
const firebtn = document.querySelector(".fire-btn");
const rainsound = new Audio("../audio/rain-01.mp3");
const firesound = new Audio("../audio/campfire-1.mp3");
let rainvol = document.getElementById("rain-vol");
let firevol = document.getElementById("fire-vol");
let currentTime = document.getElementById("current-time");
let currentWeek = document.getElementById("current-week");
const fullscreenbtn = document.getElementById("fullscreen-btn");


let focusBtn = document.querySelector(".focus");
// let buttons = document.querySelectorAll(".btn");
let shortBreakBtn = document.querySelector(".short-break");
let longBreakBtn = document.querySelector(".long-break");
let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");
let pauseBtn = document.querySelector(".pause");
let timerHolder = document.getElementById("timer-holder");
let set;
let active = "focus";
let seconds = 59;
let paused = true;
let minutes = 14;
timerHolder.textContent =`${minutes+1}:00`;
const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);


document.querySelector('.pause').style.display='none';
document.querySelector('.reset').style.display='none';


const appendZero = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value;
};


// resetBtn.addEventListener(
//   "click",
//   (resetTime = () => {
//     pauseTimer();
//     switch (active) {
//       case "long":
//         minutes = 14;
//         break;
//       case "short":
//         minutes = 4;
//         break;
//       default:
//         minutes = 24;
//         break;
//     }
//     seconds = 59;
//     time.textContent = `${minutes + 1}:00`;
//   })
// );

// const removeFocus = () => {
//   buttons.forEach((btn) => {
//     btn.classList.remove("btn-focus");
//   });
// };

// focusButton.addEventListener("click", () => {
//   removeFocus();
//   focusButton.classList.add("btn-focus");
//   pauseTimer();
//   minutes = 24;
//   seconds = 59;
//   time.textContent = `${minutes + 1}:00`;
// });

// shortBreakButton.addEventListener("click", () => {
//   active = "short";
//   removeFocus();
//   shortBreakButton.classList.add("btn-focus");
//   pauseTimer();
//   minutes = 4;
//   seconds = 59;
//   time.textContent = `${appendZero(minutes + 1)}:00`;
// });

// longBreakButton.addEventListener("click", () => {
//   active = "long";
//   removeFocus();
//   longBreakButton.classList.add("btn-focus");
//   pauseTimer();
//   minutes = 14;
//   seconds = 59;
//   time.textContent = `${minutes + 1}:00`;
// });

// pauseBtn.addEventListener(
//   "click",
//   (pauseTimer = () => {
//     paused = true;
//     clearInterval(set);
//     startBtn.classList.remove("hide");
//     pause.classList.remove("show");
//     reset.classList.remove("show");
//   })
// );

// startBtn.addEventListener("click", () => {
//     resetBtn.classList.add("show");
//     pauseBtn.classList.add("show");
//     startBtn.classList.add("hide");
//     startBtn.classList.remove("show");
//   if (paused) {
//     paused = false;
//     time.textContent = `${appendZero(minutes)}:${appendZero(seconds)}`;
//     set = setInterval(() => {
//       seconds--;
//       time.textContent = `${appendZero(minutes)}:${appendZero(seconds)}`;
//       if (seconds == 0) {
//         if (minutes != 0) {
//           minutes--;
//           seconds = 60;
//         } else {
//           clearInterval(set);
//         }
//       }
//     }, 1000);
//   }
// });





const qoutes = ["“Learn as if you will live forever, live like you will die tomorrow.”","When you change your thoughts, remember to also change your world",
          "“Success is not final; failure is not fatal: It is the courage to continue that secondss.”",
        "“Don’t let yesterday take up too much of today.”",
        "“To know how much there is to know is the beginning of learning to live.”",
        "“You don't have to be great to start, but you have to start to be great.”",
        "“The best way to predict your future is to create it”"
        ];
const authors = ["Mahatma Gandhi","Norman Vincent Peal","Winston Churchill","Will Rogers","Dorothy West","Zig Ziglar","Abraham Lincoln"];

const monthsOfYear = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];

const daysOfweek = [
  "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];



// ------------ motivation panel ------------ //
let length_quote = qoutes.length;

let randqoute = Math.floor(Math.random()*length_quote);
document.getElementById("quote-text").innerHTML=qoutes[(randqoute)];
document.getElementById("author-text").innerHTML="~ "+authors[(randqoute)];





// ------------ fullscreen button ------------ //

fullscreenbtn.addEventListener('click',function(){
  if(document.fullscreenElement){
    document.exitFullscreen();
  }
  else{
    document.body.requestFullscreen();
  }
});



// ------------ sound menu ------------ //

rainsound.volume=0.30;
firesound.volume=0.10;

rainvol.addEventListener('change',function(){
  var volumerain = document.getElementById("rain-vol").value;
  rainsound.volume = volumerain/100;
});


firevol.addEventListener('change',function(){
  var volumefire = document.getElementById("fire-vol").value;
  firesound.volume = volumefire/100;
});



rainbtn.addEventListener('click',function(){
  if (rainsound.paused||rainsound.ended){
    document.getElementById("rain-img").src="../img/icons8-pause-50.png";
    rainsound.play();}
    else{
      document.getElementById("rain-img").src="../img/icons8-play-50.png";
      rainsound.pause();
    }
  });


firebtn.addEventListener('click',function(){
  if (firesound.paused||firesound.ended){
    document.getElementById("fire-img").src="../img/icons8-pause-50.png";
    firesound.play();}
  else{
      document.getElementById("fire-img").src="../img/icons8-play-50.png";
      firesound.pause();
  }
});


//looping rainsound
  rainsound.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);


//looping firesound
firesound.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);



imgBg.addEventListener('change',function(){
  if (imgBg.value=='default-img'){
      document.body.style.backgroundColor='';
      document.body.style.backgroundImage='url(../img/main-theme.jpeg)';
  }
  else if (imgBg.value=='car'){
      document.body.style.backgroundColor='';
      document.body.style.backgroundImage='url(../img/car.jpg)';
  }
  else if (imgBg.value=='fireplace'){
      document.body.style.backgroundColor='';
      document.body.style.backgroundImage='url(../img/fireplace.jpg)';
  }
  else if (imgBg.value=='mountain'){
      document.body.style.backgroundColor='';
      document.body.style.backgroundImage='url(../img/mountain.jpg)';
  }

  else if (imgBg.value=='paris'){
    document.body.style.backgroundColor='';
    document.body.style.backgroundImage='url(../img/paris.jpg)';
}
  else if (imgBg.value=='space'){
    document.body.style.backgroundColor='';
    document.body.style.backgroundImage='url(../img/blackhole.jpg)';
}

else if (imgBg.value=='fantacy'){
  document.body.style.backgroundColor='';
  document.body.style.backgroundImage='url(../img/fantacy.jpg)';
}

else if (imgBg.value=='sky'){
  document.body.style.backgroundColor='';
  document.body.style.backgroundImage='url(../img/ballon.jpg)';
}

else if (imgBg.value=='wood'){
  document.body.style.backgroundColor='';
  document.body.style.backgroundImage='url(../img/abstract.jpg)';
}

else if (imgBg.value=='autumn'){
  document.body.style.backgroundColor='';
  document.body.style.backgroundImage='url(../img/autumn.jpg)';
}

});

colorPicker.addEventListener('change',function(){
  document.body.style.backgroundImage='none';
  document.body.style.backgroundColor=colorPicker.value;}
);



document.addEventListener("click",hidebtn)
{
  if (timerpanel.style.display=="none")
    {timerpanel.style.display=="block"};
};


// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);



// ---------------- clock ----------------
window.onload = displayClock();
function displayClock(){
  var ctime = new Date();
  var displaytime = ctime.toLocaleTimeString();
  var displayday = ctime.getDate();
  var today = (displayday%7-1);
  var displaymonth = ctime.getMonth();
  var displayday = ctime.getDate();
  var displayyear = ctime.getFullYear();
  currentTime.textContent=displaytime;
  currentWeek.textContent=daysOfweek[today]+' | '+monthsOfYear[displaymonth]+' '+displayday+', '+displayyear;
  setTimeout(displayClock, 1000); }
// ---------------- clock ----------------




// ---------------- timer ----------------
function pauseAll(){
  if (paused == false){clearInterval(timer)};
  document.querySelector('.start').style.display='inline-block';
  document.querySelector('.pause').style.display='none';
  document.querySelector('.reset').style.display='none';
}


startBtn.addEventListener("click",function(){

  document.querySelector('.start').style.display='none';
  document.querySelector('.pause').style.display='inline-block';
  document.querySelector('.reset').style.display='inline-block';

  paused = false;
  timerHolder.textContent =`${appendZero(minutes)}:${appendZero(seconds)}`;
    timer = setInterval(() => {
      seconds--;
      timerHolder.textContent =`${appendZero(minutes)}:${appendZero(seconds)}`;
        if(seconds == 0){
          if(minutes != 0){
            minutes--;
            seconds = 60;
          } else {
            clearInterval(timer);
          }
        }
    }, 1000);
});


pauseBtn.addEventListener("click",function(){

  document.querySelector('.start').style.display='inline-block';
  document.querySelector('.pause').style.display='none';
  document.querySelector('.reset').style.display='none';

  clearInterval(timer);

});

focusBtn.addEventListener("click",function(){
  pauseAll();
  active = "focus";
  minutes = 14;
  seconds = 59;
  timerHolder.textContent=`${appendZero(minutes+1)}:00`;
});

shortBreakBtn.addEventListener("click",function(){
  pauseAll();
  active = "short";
  minutes = 4;
  seconds = 59;
  timerHolder.textContent=`${appendZero(minutes+1)}:00`;
});

longBreakBtn.addEventListener("click",function(){
  pauseAll();
  active = "long";
  minutes = 24;
  seconds = 59;
  timerHolder.textContent=`${appendZero(minutes+1)}:00`;
});


resetBtn.addEventListener("click",function(){

  document.querySelector('.start').style.display='inline-block';
  document.querySelector('.pause').style.display='none';
  document.querySelector('.reset').style.display='none';

  pauseAll();
  switch(active){
    case "focus":
      minutes = 14;
      break;
    case "short":
      minutes = 4;
      break;
    case "long":
      minutes = 24;
      break;
  }
  seconds = 59;
  timerHolder.textContent=` ${appendZero(minutes+1)}:00`;
});