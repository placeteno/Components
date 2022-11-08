const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const dice = document.querySelector(".dice");

const getNewAdice = async function () {
  try {
    const data = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await data.json();
    adviceNumber.textContent = slip.id;
    adviceText.textContent = slip.advice;
  } catch (err) {
    alert("ERROR 💥 Could not reach the server.");
  }
};

dice.addEventListener("click", getNewAdice);
