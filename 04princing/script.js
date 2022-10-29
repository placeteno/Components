const slider = document.querySelector(".slider-container");
const sliderCircle = document.querySelector(".slider-circle");
const planPrice = document.querySelectorAll(".plan--price");

const changePrice = function (plan) {
  const price = plan.textContent;
  if (price.length === 5) {
    const result = +(price * 10).toFixed(2) + 0.09;
    plan.textContent = result.toString().slice(0, 6);
  } else {
    const result = Number((price / 10).toFixed(2)) - 0.01;
    plan.textContent = result;
  }
};

slider.addEventListener("click", () => {
  sliderCircle.classList.toggle("right");
  planPrice.forEach((plan) => changePrice(plan));
});
