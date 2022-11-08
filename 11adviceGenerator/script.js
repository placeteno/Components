const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const dice = document.querySelector(".dice");

const getNewAdice = async function () {
  try {
    const data = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await data.json();
    console.log(slip);
    adviceNumber.textContent = slip.id;
    adviceText.textContent = slip.advice;
  } catch (err) {
    console.log(err);
  }
};

// fetch("https://api.adviceslip.com/advice")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

dice.addEventListener("click", getNewAdice);
