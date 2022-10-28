const slider = document.querySelector(".slider-container");
const sliderCircle = document.querySelector(".slider-circle");

slider.addEventListener("click", () => {
  sliderCircle.classList.toggle("right");
});
