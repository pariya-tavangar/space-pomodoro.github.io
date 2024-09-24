// let focusButton = document.getElementById("focus");
// let buttons = document.querySelectorAll(".btn");
// let shortBreakButton = document.getElementById("shortbreak");
// let longBreakButton = document.getElementById("longbreak");
// let startBtn = document.getElementById("btn-start");
// let reset = document.getElementById("btn-reset");
// let pause = document.getElementById("btn-pause");
// let time = document.getElementById("time");
// let set;
// let active = "focus";
// let count = 59;
// let paused = true;
// let minCount = 24;
// time.textContent = `${minCount + 1}:00`;

// const appendZero = (value) => {
//   value = value < 10 ? `0${value}` : value;
//   return value;
// };

// reset.addEventListener(
//   "click",
//   (resetTime = () => {
//     pauseTimer();
//     switch (active) {
//       case "long":
//         minCount = 14;
//         break;
//       case "short":
//         minCount = 4;
//         break;
//       default:
//         minCount = 24;
//         break;
//     }
//     count = 59;
//     time.textContent = `${minCount + 1}:00`;
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
//   minCount = 24;
//   count = 59;
//   time.textContent = `${minCount + 1}:00`;
// });

// shortBreakButton.addEventListener("click", () => {
//   active = "short";
//   removeFocus();
//   shortBreakButton.classList.add("btn-focus");
//   pauseTimer();
//   minCount = 4;
//   count = 59;
//   time.textContent = `${appendZero(minCount + 1)}:00`;
// });

// longBreakButton.addEventListener("click", () => {
//   active = "long";
//   removeFocus();
//   longBreakButton.classList.add("btn-focus");
//   pauseTimer();
//   minCount = 14;
//   count = 59;
//   time.textContent = `${minCount + 1}:00`;
// });

// pause.addEventListener(
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
//   reset.classList.add("show");
//   pause.classList.add("show");
//   startBtn.classList.add("hide");
//   startBtn.classList.remove("show");
//   if (paused) {
//     paused = false;
//     time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
//     set = setInterval(() => {
//       count--;
//       time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
//       if (count == 0) {
//         if (minCount != 0) {
//           minCount--;
//           count = 60;
//         } else {
//           clearInterval(set);
//         }
//       }
//     }, 1000);
//   }
// });

//--------- modal ---------------

let colorPicker = document.querySelector('#color-picker');

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

var timerpanel = document.getElementById("timer-panel");
var themepanel = document.getElementById("theme-panel");
const hidebtn = document.getElementById("hide-btn")

let imgBg = document.querySelector("#img-list");
let colorBg = document.querySelector('#color-list');


imgBg.addEventListener('change',function(){
  if (imgBg.value=='default-img'){
      document.body.style.backgroundColor='';
      document.body.style.backgroundImage='url(../img/warm-bg.jpeg)';
  }
  else if (imgBg.value=='cozy-room'){
      document.body.style.backgroundColor='';
      document.body.style.backgroundImage='url(../img/cozy.jpeg)';
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
    document.body.style.backgroundImage='url(../img/paris.jpeg)';
}
  else if (imgBg.value=='nature'){
    document.body.style.backgroundColor='';
    document.body.style.backgroundImage='url(../img/nature.jpeg)';
}

})

colorPicker.addEventListener('change',function(){
  document.body.style.backgroundImage='none';
  document.body.style.backgroundColor=colorPicker.value;}
)
// colorBg.addEventListener('change',function(){
//   if (colorBg.value=='red'){
//     document.body.style.backgroundImage='none';
//     document.body.style.backgroundColor='#db3545';
//   }
//   else if (colorBg.value=='orange'){
//     document.body.style.backgroundImage='none';
//     document.body.style.backgroundColor='#fc9642';
// }
// else if (colorBg.value=='yellow'){
//     document.body.style.backgroundImage='none';
//     document.body.style.backgroundColor='#ffcd38';
// }
// else if (colorBg.value=='green'){
//     document.body.style.backgroundImage='none';
//     document.body.style.backgroundColor='#1a8754';
// }
// else if (colorBg.value=='blue'){
//     document.body.style.backgroundImage='none';
//     document.body.style.backgroundColor='#0d6dfc';
// }
// else if (colorBg.value=='green'){
//     document.body.style.backgroundImage='none';
//     document.body.style.backgroundColor='#1a8754';
// }
// else if (colorBg.value=='purple'){
//     document.body.style.backgroundImage='none'; 
//     document.body.style.backgroundColor='#8b68cc';
// }
// else if (colorBg.value=='gray'){
//     document.body.style.backgroundImage='none';
//     document.body.style.backgroundColor='#6b757d';
// }
// })


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