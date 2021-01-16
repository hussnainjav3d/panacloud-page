const menuBtn = document.querySelector(".menu-btn");
const bars = document.querySelectorAll(".menu-btn div");
const menu = document.querySelector(".menu");
console.log(bars);

menuBtn.addEventListener("click", () => {
  bars.forEach((bar) => {
    bar.classList.toggle("change");
  });
  menu.classList.toggle("show");
});

// function menuBtn(x) {
//   x.classList.toggle("change");
// }
